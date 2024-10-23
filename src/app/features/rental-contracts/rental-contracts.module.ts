import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentalContractsRoutingModule } from './rental-contracts-routing.module';
import { RentalContractsComponent } from './rental-contracts.component';


@NgModule({
  declarations: [
    RentalContractsComponent
  ],
  imports: [
    CommonModule,
    RentalContractsRoutingModule
  ]
})
export class RentalContractsModule { }
