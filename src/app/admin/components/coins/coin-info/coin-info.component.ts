import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CryptoCurrency } from '../../../api/coinGecko/cryptocurrency';
import { CoinInfo } from '../../../api/coinGecko/coinInfo';
import { CryptoCurrencyService } from '../../../service/coinGecko/cryptocurrency.service';

@Component({
    selector: 'app-coininfo',
    templateUrl: './coin-info.component.html',
})
export class CoinInfoComponent implements OnInit {

    idCoin: string;
    currency: string = 'usd';
    crypto: CryptoCurrency;
    coinInfo: CoinInfo;

    constructor(
        private activatedRoute: ActivatedRoute, 
        private router:Router,
        private cryptoCurrencyService:CryptoCurrencyService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            let id = params['id'];
            if (id == undefined) {
                this.router.navigateByUrl('/cryptocurrencies/coin-info/bitcoin');
                this.idCoin = 'bitcoin';
            }else{
                this.idCoin = id;
            }
            })
        
        this.cryptoCurrencyService.getCryptoCurrenciesById(this.currency, this.idCoin).subscribe(
            crypto => { this.crypto = crypto }
        );

        this.cryptoCurrencyService.getCoinById(this.idCoin).subscribe(
            coinInfo => { this.coinInfo = coinInfo }
        );

    }
}
