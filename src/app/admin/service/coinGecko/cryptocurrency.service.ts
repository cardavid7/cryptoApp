import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from "rxjs";
import { CryptoCurrency } from "../../api/coinGecko/cryptocurrency";

@Injectable()
export class CryptoCurrencyService {

    private url: string = "https://api.coingecko.com/api/v3";
    private endPoint: string = "/coins/markets";

    private vs_currency: string = "vs_currency";
    private price_change_percentage: string = "price_change_percentage";
    private price_change_percentage_value: string = "1h,24h,7d";

    private httpHeaders = new HttpHeaders({
        'acept': 'application/json',
    });

    private httpParams = new HttpParams();

    constructor(private http: HttpClient) { }

    public getCryptoCurrencies(currency: string): Observable<CryptoCurrency[]> {

        this.httpParams = this.httpParams.set(this.vs_currency, currency);
        this.httpParams = this.httpParams.set(this.price_change_percentage, this.price_change_percentage_value);

        return this.http.get<CryptoCurrency[]>(this.url + this.endPoint, { params: this.httpParams }).pipe(
            map((response: any) => response as CryptoCurrency[]),
            /*map((response: any) => {
                let criptos = response as CryptoCurrency[];
                for (let cripto of criptos) {
                    if (cripto.id == 'bitcoin') {
                        console.log('cripto: ' + cripto);
                    }
                }

                return criptos;
            })*/
        )
    }
}