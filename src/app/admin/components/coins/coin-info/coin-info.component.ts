import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CryptoCurrency } from '../../../api/coinGecko/cryptocurrency';
import { CoinInfo } from '../../../api/coinGecko/coinInfo';
import { CryptoCurrencyService } from '../../../service/coinGecko/cryptocurrency.service';

@Component({
    selector: 'app-coininfo',
    templateUrl: './coin-info.component.html',
    standalone: false
})
export class CoinInfoComponent implements OnInit {

    error: string = '';
    display: boolean = false;

    idCoin: string = '';
    currency: string = 'usd';
    crypto: CryptoCurrency = new CryptoCurrency();
    coinInfo: CoinInfo = new CoinInfo();

    valueProgressBar: number = 0;
    valueProgressBarLife: number = 0;

    homepage: string[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private cryptoCurrencyService: CryptoCurrencyService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            let id = params['id'];
            if (id == undefined) {
                this.router.navigateByUrl('/cryptocurrencies/coin-info/bitcoin');
                this.idCoin = 'bitcoin';
            } else {
                this.idCoin = id;
            }
        })

        this.cryptoCurrencyService.getCryptoCurrenciesById(this.currency, this.idCoin).subscribe(
            crypto => {
                this.crypto = crypto
                this.valueProgressBar = (this.crypto.current_price - this.crypto.low_24h) / (this.crypto.high_24h - this.crypto.low_24h) * 100
                this.valueProgressBarLife = (this.crypto.current_price - this.crypto.atl) / (this.crypto.ath - this.crypto.atl) * 100
            },
            error => {
                this.error = error;
                this.display = true;
            }
        );

        this.cryptoCurrencyService.getCoinById(this.idCoin).subscribe(
            coinInfo => {
                this.coinInfo = coinInfo

                if (this.coinInfo.links?.homepage !== undefined) {
                    if (this.coinInfo.links?.homepage[0].length > 0) {
                        for (let value in this.coinInfo.links.homepage) {
                            if (this.coinInfo.links.homepage[value].length > 0) {
                                this.homepage.push(this.coinInfo.links.homepage[value]);
                            }
                        }
                    }
                }
            }
        );



    }
}
