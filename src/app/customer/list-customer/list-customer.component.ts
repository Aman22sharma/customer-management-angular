import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {
  show = true;
  customerList: any = [];
  autohide = true;
  toasts: any[] = [];
  filerValue: string = "";
  constructor(
    private apiService: ApiService,
    private route: Router,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.getCustomerList()
  }

  getCustomerList() {
    let apiUrl = "https://stg-testdouble.quinnox.info/37b3aeab-77a2-4847-aaa7-61b5ea92687b-employee-data";
    this.apiService.getMethod(apiUrl).subscribe(
      data => {
        console.log("Cutomer List Data", data)
        this.customerList = data;
        console.log("Customer Data Fetched Succefully!")
      }, error => {
        console.log("Api error", error)
      }
    )
  }
  addCustomer() {
    this.commonService.fromPage = "add-user"
    this.route.navigate(['/add']);
  }

  updateCustomer(customer?: any) {
    this.commonService.fromPage = "update-user";
    this.route.navigate(['/edit', customer.id]);
  }

  deleteCustomer(customer?: any) {
    this.apiService.deleteCustomer(customer?.id).subscribe(
      () => {
        console.log('Customer deleted successfully');
        this.getCustomerList()
      },
      error => {
        console.error('Error deleting customer:', error);
      }
    );
  }

  viewCustomer(customer?: any) {
    this.route.navigate(['/view', customer.id]);
  }
}
