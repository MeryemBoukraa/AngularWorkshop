import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentalRequestsRoutingModule } from './rental-requests-routing.module';
import { RentalRequestsComponent } from './rental-requests.component';


@NgModule({
  declarations: [
    RentalRequestsComponent
  ],
  imports: [
    CommonModule,
    RentalRequestsRoutingModule
  ]
})
export class RentalRequestsModule { }
