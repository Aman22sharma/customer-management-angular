import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  customer: Customer = { id: 0, firstname: '', lastname: '', email: '', companyname: '', city: '' };
  addCustomerForm!: FormGroup<any>;
  show = true;
  constructor(private _fb: FormBuilder, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.addCustomerForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      copanyName: ['', Validators.required],
      city: ['', Validators.required],
    })
  }

  submit() {
    if (this.addCustomerForm.invalid) {
      window.alert('Form incomplete!')
    }
    this.customer.firstname = this.addCustomerForm.value.firstName;
    this.customer.lastname = this.addCustomerForm.value.lastName;
    this.customer.email = this.addCustomerForm.value.email;
    this.customer.companyname = this.addCustomerForm.value.copanyName;
    this.customer.city = this.addCustomerForm.value.city;
    this.apiService.addCustomer(this.customer).subscribe(
      () => {
        console.log('Customer added successfully');
        this.router.navigate(['/customers']);
      },
      error => {
        console.error('Error adding customer:', error);
      }
    );
  }

  close() {
    this.show = false;
    setTimeout(() => (this.show = true), 3000);
  }
}
