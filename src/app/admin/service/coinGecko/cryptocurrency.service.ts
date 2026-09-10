import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, catchError, throwError, shareReplay } from "rxjs";
import { environment } from "../../../../environments/environment";
import { CryptoCurrency } from "../../api/coinGecko/cryptocurrency";
import { CoinInfo } from "../../api/coinGecko/coinInfo";

/** How long a fetched market list is reused before hitting the API again. */
const MARKETS_CACHE_MS = 60_000;

@Injectable()
export class CryptoCurrencyService {

    private url: string = environment.coinGecko.baseUrl;
    private coins: string = "/coins";
    private markets: string = "/markets";

    private marketsCache = new Map<string, { at: number; data$: Observable<CryptoCurrency[]> }>();

    constructor(private http: HttpClient) { }

    public getCryptoCurrencies(currency: string): Observable<CryptoCurrency[]> {
        const cached = this.marketsCache.get(currency);
        if (cached && Date.now() - cached.at < MARKETS_CACHE_MS) {
            return cached.data$;
        }

        let httpParams = new HttpParams();
        httpParams = httpParams.set('vs_currency', currency);
        httpParams = httpParams.set('price_change_percentage', '1h,24h,7d');

        const data$ = this.http.get<CryptoCurrency[]>(this.url + this.coins + this.markets, { params: httpParams }).pipe(
            map((response: any) => response as CryptoCurrency[]),
            shareReplay({ bufferSize: 1, refCount: false }),
            catchError(error => {
                this.marketsCache.delete(currency);
                return throwError(() => this.toMessage(error));
            })
        );

        this.marketsCache.set(currency, { at: Date.now(), data$ });
        return data$;
    }

    public getCryptoCurrenciesById(currency: string, idCoin: string): Observable<CryptoCurrency> {

        let httpParams = new HttpParams();
        httpParams = httpParams.set('vs_currency', currency);
        httpParams = httpParams.set('price_change_percentage', '1h,24h,7d');
        httpParams = httpParams.set('ids', idCoin);

        return this.http.get<CryptoCurrency[]>(this.url + this.coins + this.markets, { params: httpParams }).pipe(
            map((response: CryptoCurrency[]) => {
                return response[0];
            }),
            catchError(error => {
                return throwError(() => this.toMessage(error));
            })
        )
    }

    public getCoinById(idCoin: string): Observable<CoinInfo> {

        let httpParams = new HttpParams();
        httpParams = httpParams.set('id', idCoin);
        httpParams = httpParams.set('localization', 'false');
        httpParams = httpParams.set('tickers', false);
        httpParams = httpParams.set('market_data', false);
        httpParams = httpParams.set('community_data', false);
        httpParams = httpParams.set('developer_data', false);
        httpParams = httpParams.set('sparkline', false);

        return this.http.get<CoinInfo>(this.url + this.coins + '/' + idCoin, { params: httpParams }).pipe(
            catchError(error => {
                return throwError(() => this.toMessage(error));
            })
        )
    }

    private toMessage(error: unknown): string {
        const status = (error as { status?: number })?.status;
        if (status === 429) {
            return "CoinGecko rate limit reached. Please wait a moment and try again.";
        }
        return "Service error, please try again later.";
    }
}
