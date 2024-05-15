import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonService } from '../services/common.service';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';

const routes: Routes = [
  { path: 'add', component: AddCustomerComponent, resolve: { customer: CommonService } },
  { path: 'edit/:id', component: EditCustomerComponent, resolve: { customer: CommonService } },
  { path: 'list', component: ListCustomerComponent },
  { path: 'view/:id', component: ViewCustomerComponent, resolve: { customer: CommonService } },
  { path: '', redirectTo: 'list', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
