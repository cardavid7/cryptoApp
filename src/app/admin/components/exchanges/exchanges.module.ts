import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExchangesComponent } from './exchanges.component';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ExchangesRoutingModule } from './exchanges-routing.module';
import { ImageModule } from 'primeng/image';
import { ScrollTopModule } from 'primeng/scrolltop';
import { TooltipModule } from 'primeng/tooltip';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';

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
        ExchangesRoutingModule,
        ImageModule,
        ScrollTopModule,
        TooltipModule,
        TagModule,
        ProgressBarModule
    ],
    declarations: [ExchangesComponent]
})
export class ExchangesModule { }
