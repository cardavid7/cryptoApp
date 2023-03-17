import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { CryptoCurrency } from '../../api/coinGecko/cryptocurrency';
import { CryptoCurrencyService } from '../../service/coinGecko/cryptocurrency.service';

@Component({
    templateUrl: './cryptocurrency.component.html',
})
export class CryptoCurrencyComponent implements OnInit {

    items!: MenuItem[];

    cryptoCurrencies: CryptoCurrency[];

    currency: string = "usd";

    constructor(public layoutService: LayoutService,
        public cryptoCurrencyService: CryptoCurrencyService) { }

    ngOnInit() {
        this.cryptoCurrencyService.getCryptoCurrencies(this.currency).subscribe(
            cryptoCurrencies => { this.cryptoCurrencies = cryptoCurrencies }
        );
    }

    makeValuePercent(value: string): string {

        return "";
    }



}
