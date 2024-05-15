import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { Customer } from 'src/app/customer.model';


@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {
  customer: Customer | any;

  constructor(private avtivatedRoute: ActivatedRoute, private commonService: CommonService) { }

  ngOnInit(): void {
    this.customer = this.avtivatedRoute.snapshot.data['customer'];
    console.log(`Customer ID:${this.customer?.id}`, this.customer)
  }
}
