import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module'; // Import the routing module
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from '../pipe/search-pipe.pipe';

@NgModule({
  declarations: [AddCustomerComponent, EditCustomerComponent, ListCustomerComponent, ViewCustomerComponent, SearchPipe],
  imports: [CommonModule, CustomerRoutingModule, HttpClientModule, NgbToastModule, ReactiveFormsModule, FormsModule],
})
export class CustomerModule { }
