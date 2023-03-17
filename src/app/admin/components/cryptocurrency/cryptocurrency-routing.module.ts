import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CryptoCurrencyComponent } from './cryptocurrency.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CryptoCurrencyComponent }
    ])],
    exports: [RouterModule]
})
export class CryptoCurrenciesRoutingModule { }
