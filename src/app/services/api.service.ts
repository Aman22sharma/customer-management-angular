import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Customer } from '../customer.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  toasts: any[] = [];
  apiUrl = "https://stg-testdouble.quinnox.info/37b3aeab-77a2-4847-aaa7-61b5ea92687b-employee-data"
  constructor(private http: HttpClient) { }

  getMethod(url?: any): Observable<any> {
    return this.http.get(url);
  }

  postMethod(url?: any, body?: any, token?: any): Observable<any> {
    let httpHeader = new HttpHeaders({
      'Contenet-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    let options = {
      headers: httpHeader,
    };
    return this.http.post('https://reqres.in/api/unknown', body, options);
  }

  getCustomer(customerId: string): Observable<Customer> {
    const url = `${this.apiUrl}/${customerId}`;
    return this.http.get<Customer>(url);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    const url = `${this.apiUrl}/${customer.id}`;
    return this.http.put<Customer>(url, customer);
  }

  deleteCustomer(customerId: number): Observable<boolean> {
    const url = `${this.apiUrl}/${customerId}`;
    return this.http.delete<boolean>(url);
  }
}
