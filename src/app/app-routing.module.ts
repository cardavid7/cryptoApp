import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./admin/components/cryptocurrencies/cryptocurrencies.module').then(m => m.CryptoCurrenciesModule) },
                    { path: 'cryptocurrencies', loadChildren: () => import('./admin/components/coins/coins.module').then(m => m.CoinsModule) },
                    { path: 'exchanges', loadChildren: () => import('./admin/components/exchanges/exchanges.module').then(m => m.ExchangesModule) }
                ]
            },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
