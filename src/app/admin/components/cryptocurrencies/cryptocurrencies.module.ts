import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CryptoCurrenciesComponent } from './cryptocurrencies.component';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CryptoCurrenciesRoutingModule } from './cryptocurrencies-routing.module';
import { ImageModule } from 'primeng/image';
import { ScrollTopModule } from 'primeng/scrolltop';

@NgModule({
    imports: [
        CommonModule,
        PanelMenuModule,
        MenuModule,
        StyleClassModule,
        FormsModule,
        ChartModule,
        TableModule,
        ButtonModule,
        CryptoCurrenciesRoutingModule,
        ImageModule,
        ScrollTopModule
    ],
    declarations: [CryptoCurrenciesComponent]
})
export class CryptoCurrenciesModule { }
