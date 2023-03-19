import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from "rxjs";
import { Exchange } from "../../api/coinGecko/exchange";

@Injectable()
export class ExchangeService {

    private url: string = "https://api.coingecko.com/api/v3";
    private exchanges: string = "/exchanges";

    constructor(private http: HttpClient) { }

    public getExchanges(): Observable<Exchange[]> {

        return this.http.get<Exchange[]>(this.url + this.exchanges).pipe(
            
        )

    }
}