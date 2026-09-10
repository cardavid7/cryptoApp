import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Exchange } from "../../api/coinGecko/exchange";

@Injectable()
export class ExchangeService {

    private url: string = environment.coinGecko.baseUrl;
    private exchanges: string = "/exchanges";

    constructor(private http: HttpClient) { }

    public getExchanges(): Observable<Exchange[]> {

        return this.http.get<Exchange[]>(this.url + this.exchanges).pipe(
            catchError(error => {
                const status = (error as { status?: number })?.status;
                return throwError(() => status === 429
                    ? "CoinGecko rate limit reached. Please wait a moment and try again."
                    : "Service error, please try again later.");
            })
        )

    }
}
