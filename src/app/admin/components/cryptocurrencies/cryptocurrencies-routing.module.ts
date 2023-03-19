import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptoCurrenciesComponent } from './cryptocurrencies.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CryptoCurrenciesComponent }
    ])],
    exports: [RouterModule]
})
export class CryptoCurrenciesRoutingModule { }
