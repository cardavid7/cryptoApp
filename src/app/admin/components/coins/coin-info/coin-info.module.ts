import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinInfoComponent } from './coin-info.component';
import { CoinInfoRoutingModule } from './coin-info-routing.module';
import { ImageModule } from 'primeng/image';

@NgModule({
    imports: [
        CommonModule,
        CoinInfoRoutingModule,
        ImageModule
    ],
    declarations: [CoinInfoComponent]
})
export class CoinInfoModule { }
