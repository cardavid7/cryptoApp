import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoCurrenciesComponent } from './cryptocurrencies.component';
import { TableModule } from 'primeng/table';
import { CryptoCurrenciesRoutingModule } from './cryptocurrencies-routing.module';
import { ImageModule } from 'primeng/image';
import { ScrollTopModule } from 'primeng/scrolltop';

@NgModule({
    imports: [
        CommonModule,
        TableModule,
        ImageModule,
        ScrollTopModule,
        CryptoCurrenciesRoutingModule
    ],
    declarations: [CryptoCurrenciesComponent]
})
export class CryptoCurrenciesModule { }
