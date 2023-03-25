import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinInfoComponent } from './coin-info.component';
import { CoinInfoRoutingModule } from './coin-info-routing.module';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { DividerModule } from 'primeng/divider';
import { ChipModule } from 'primeng/chip';

@NgModule({
    imports: [
        CommonModule,
        CoinInfoRoutingModule,
        ImageModule,
        TagModule,
        ProgressBarModule,
        DividerModule,
        ChipModule
    ],
    declarations: [CoinInfoComponent]
})
export class CoinInfoModule { }
