import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CryptoCurrencyComponent } from './cryptocurrency.component';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CryptoCurrenciesRoutingModule } from './cryptocurrency-routing.module';
import { ImageModule } from 'primeng/image';
import { ScrollTopModule } from 'primeng/scrolltop';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        CryptoCurrenciesRoutingModule,
        ImageModule,
        ScrollTopModule
    ],
    declarations: [CryptoCurrencyComponent]
})
export class CryptoCurrencyModule { }
