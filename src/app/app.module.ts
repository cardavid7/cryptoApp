import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { CryptoCurrencyService } from './admin/service/coinGecko/cryptocurrency.service'
import { ExchangeService } from './admin/service/coinGecko/exchange.service'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CryptoCurrencyService,ExchangeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
