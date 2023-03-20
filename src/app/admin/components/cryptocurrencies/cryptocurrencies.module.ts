import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoCurrenciesComponent } from './cryptocurrencies.component';
import { TableModule } from 'primeng/table';
import { CryptoCurrenciesRoutingModule } from './cryptocurrencies-routing.module';
import { ImageModule } from 'primeng/image';
import { ScrollTopModule } from 'primeng/scrolltop';
import { RouterModule, Routes } from '@angular/router';
import { CoinInfoComponent} from '../coins/coin-info/coin-info.component';

const routes: Routes = [
    { path: 'cryptocurrencies/coin-info/:id', component: CoinInfoComponent },
  ];

@NgModule({
    imports: [
        CommonModule,
        TableModule,
        ImageModule,
        ScrollTopModule,
        CryptoCurrenciesRoutingModule,
        RouterModule.forChild(routes)
    ],
    declarations: [CryptoCurrenciesComponent]
})
export class CryptoCurrenciesModule { }
