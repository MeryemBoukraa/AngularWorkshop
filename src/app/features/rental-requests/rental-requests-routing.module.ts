import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalRequestsComponent } from './rental-requests.component';

const routes: Routes = [{ path: '', component: RentalRequestsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalRequestsRoutingModule { }
