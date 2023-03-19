import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExchangesComponent } from './exchanges.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ExchangesComponent }
    ])],
    exports: [RouterModule]
})
export class ExchangesRoutingModule { }
