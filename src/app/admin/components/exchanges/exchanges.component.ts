import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Exchange } from '../../api/coinGecko/exchange';
import { ExchangeService } from '../../service/coinGecko/exchange.service';

@Component({
    templateUrl: './exchanges.component.html',
})
export class ExchangesComponent implements OnInit {

    exchanges: Exchange[];

    constructor(public layoutService: LayoutService,
        public exchangeService: ExchangeService) { }

    ngOnInit() {
        this.exchangeService.getExchanges().subscribe(
            exchanges => {
                this.exchanges = exchanges
                this.exchanges.sort(((a, b) => a.trust_score_rank - b.trust_score_rank));
            }
        );
    }
}
