import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';

const routes: Routes = [
  { path: 'payments', loadChildren: () => import('./features/payments/payments.module').then(m => m.PaymentsModule) }, 
  { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) }, 
  { path: 'properties', loadChildren: () => import('./features/properties/properties.module').then(m => m.PropertiesModule) }, 
  { path: 'rentalRequests', loadChildren: () => import('./features/rental-requests/rental-requests.module').then(m => m.RentalRequestsModule) }, 
  { path: 'rentalContracts', loadChildren: () => import('./features/rental-contracts/rental-contracts.module').then(m => m.RentalContractsModule) },
  {path:'home',component: HomeComponent},
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
