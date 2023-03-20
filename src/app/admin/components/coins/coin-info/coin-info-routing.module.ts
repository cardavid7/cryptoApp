import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoinInfoComponent } from './coin-info.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CoinInfoComponent }
    ])],
    exports: [RouterModule]
})
export class CoinInfoRoutingModule { }
