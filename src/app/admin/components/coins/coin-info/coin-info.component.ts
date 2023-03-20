import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CryptoCurrency } from '../../../api/coinGecko/cryptocurrency';
import { CryptoCurrencyService } from '../../../service/coinGecko/cryptocurrency.service';

@Component({
    templateUrl: './coin-info.component.html',
})
export class CoinInfoComponent implements OnInit {

    idCoin:string;

    constructor(private activatedRoute: ActivatedRoute, private router:Router) { }

    ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        let id = params['id'];
        if (id == undefined) {
            this.router.navigateByUrl('/cryptocurrencies/coin-info/bitcoin');
            
        }else{
            this.idCoin = id;
        }
        })
    }
}
