import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalContractsComponent } from './rental-contracts.component';

const routes: Routes = [{ path: '', component: RentalContractsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalContractsRoutingModule { }
