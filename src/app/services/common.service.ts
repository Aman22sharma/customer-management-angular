import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Customer } from '../customer.model';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  fromPage: string = '';
  customerListData: Array<any> = [];

  constructor(private apiService: ApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Customer | null> {
    const customerId = route.params['id'];
    return this.apiService.getCustomer(customerId).pipe(
      catchError(error => {
        console.error('Error fetching customer:', error);
        return of(null);
      })
    );
  }
}
