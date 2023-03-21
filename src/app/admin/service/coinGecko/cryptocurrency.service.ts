import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from "rxjs";
import { CryptoCurrency } from "../../api/coinGecko/cryptocurrency";
import { CoinInfo } from "../../api/coinGecko/coinInfo";

@Injectable()
export class CryptoCurrencyService {

    private url: string = "https://api.coingecko.com/api/v3";
    private coins: string = "/coins";
    private markets: string = "/markets";

    private httpHeaders = new HttpHeaders({
        'acept': 'application/json',
    });

    constructor(private http: HttpClient) { }

    public getCryptoCurrencies(currency: string): Observable<CryptoCurrency[]> {

        let httpParams = new HttpParams();
        httpParams = httpParams.set('vs_currency', currency);
        httpParams = httpParams.set('price_change_percentage', '1h,24h,7d');

        return this.http.get<CryptoCurrency[]>(this.url + this.coins + this.markets, { params: httpParams }).pipe(
            map((response: any) => response as CryptoCurrency[]),
        )
    }

    public getCryptoCurrenciesById(currency: string, idCoin: string): Observable<CryptoCurrency> {

        let httpParams = new HttpParams();
        httpParams = httpParams.set('vs_currency', currency);
        httpParams = httpParams.set('price_change_percentage', '1h,24h,7d');
        httpParams = httpParams.set('ids', idCoin);

        return this.http.get<CryptoCurrency[]>(this.url + this.coins + this.markets, { params: httpParams }).pipe(
            map((response: CryptoCurrency[]) => {
                return response[0];
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

        return this.http.get<CoinInfo>(this.url + this.coins + '/' + idCoin, { params: httpParams })
    }
}