import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'coin-info', data: { breadcrumb: 'Coin info' }, loadChildren: () => import('./coin-info/coin-info.module').then(m => m.CoinInfoModule) },

    ])],
    exports: [RouterModule]
})
export class CoinsRoutingModule { }
