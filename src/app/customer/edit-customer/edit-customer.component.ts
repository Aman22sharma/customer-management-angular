import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/customer.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent {
  customer: Customer = { id: 0, firstname: '', lastname: '', email: '', companyname: '', city: '' };
  updateCustomerForm!: FormGroup<any>;
  constructor(
    private avtivatedRoute: ActivatedRoute,
    private _fb: FormBuilder,
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.customer = this.avtivatedRoute.snapshot.data['customer'];
    console.log(this.customer)
    this.updateCustomerForm = this._fb.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      copanyName: ['', Validators.required],
      city: ['', Validators.required],
    })
    this.fillFormData()
  }

  fillFormData() {
    this.updateCustomerForm.patchValue({
      id: this.customer?.id,
      firstName: this.customer?.firstname,
      lastName: this.customer?.lastname,
      email: this.customer?.email,
      copanyName: this.customer?.companyname,
      city: this.customer?.city,
    })
  }

  submit() {
    if (this.updateCustomerForm.invalid) {
      window.alert('Form incomplete!')
    }
    this.customer.id = this.updateCustomerForm.value.id;
    this.customer.firstname = this.updateCustomerForm.value.firstName;
    this.customer.lastname = this.updateCustomerForm.value.lastName;
    this.customer.email = this.updateCustomerForm.value.email;
    this.customer.companyname = this.updateCustomerForm.value.copanyName;
    this.customer.city = this.updateCustomerForm.value.city;
    console.log(this.customer)
    this.apiService.updateCustomer(this.customer).subscribe(
      () => {
        console.log('Customer updated successfully');
        this.router.navigate(['/customers']);
      },
      error => {
        console.error('Error updating customer:', error);
      }
    );
  }
}
