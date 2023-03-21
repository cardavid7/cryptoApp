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

    private httpParams = new HttpParams();

    constructor(private http: HttpClient) { }

    public getCryptoCurrencies(currency: string): Observable<CryptoCurrency[]> {

        this.httpParams = this.httpParams.set('vs_currency', currency);
        this.httpParams = this.httpParams.set('price_change_percentage', '1h,24h,7d');

        return this.http.get<CryptoCurrency[]>(this.url + this.coins + this.markets, { params: this.httpParams }).pipe(
            map((response: any) => response as CryptoCurrency[]),
        )
    }

    public getCryptoCurrenciesById(currency: string, idCoin: string): Observable<CryptoCurrency> {

        this.httpParams = this.httpParams.set('vs_currency', currency);
        this.httpParams = this.httpParams.set('price_change_percentage', '1h,24h,7d');
        this.httpParams = this.httpParams.set('ids', idCoin);

        return this.http.get<CryptoCurrency[]>(this.url + this.coins + this.markets, { params: this.httpParams }).pipe(
            map((response: CryptoCurrency[]) => {
                return response[0];
            })
        )
    }

    public getCoinById(idCoin:string): Observable<CoinInfo> {

        this.httpParams = this.httpParams.set('id', idCoin);
        this.httpParams = this.httpParams.set('localization', 'false');
        this.httpParams = this.httpParams.set('tickers', false);
        this.httpParams = this.httpParams.set('market_data', false);
        this.httpParams = this.httpParams.set('community_data', false);
        this.httpParams = this.httpParams.set('developer_data', false);
        this.httpParams = this.httpParams.set('sparkline', false);

        return this.http.get<CoinInfo>(this.url + this.coins + '/' +idCoin, { params: this.httpParams })
    }
}