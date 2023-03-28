import { Component, OnInit, OnDestroy } from '@angular/core';
import { CryptoCurrency } from '../../api/coinGecko/cryptocurrency';
import { CryptoCurrencyService } from '../../service/coinGecko/cryptocurrency.service';

@Component({
    templateUrl: './cryptocurrencies.component.html',
})
export class CryptoCurrenciesComponent implements OnInit {

    cryptoCurrencies: CryptoCurrency[] = [];

    currency: string = "usd";
    error: string = "";
    display: boolean = false;

    constructor(public cryptoCurrencyService: CryptoCurrencyService) { }

    ngOnInit() {
        this.cryptoCurrencyService.getCryptoCurrencies(this.currency).subscribe(
            cryptoCurrencies => {
                this.cryptoCurrencies = cryptoCurrencies
            },
            error => {
                this.error = error
                this.display = true;
            }
        );
    }
}
