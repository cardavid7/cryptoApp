import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinInfoComponent } from './coin-info.component';
import { CoinInfoRoutingModule } from './coin-info-routing.module';

@NgModule({
    imports: [
        CommonModule,
        CoinInfoRoutingModule,
    ],
    declarations: [CoinInfoComponent]
})
export class CoinInfoModule { }
