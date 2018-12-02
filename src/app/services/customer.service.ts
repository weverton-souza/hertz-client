import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  private baseUrl = 'http://localhost:8080/app/customers';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) { }

  save(customer: Customer): Observable<Customer>  {
    return this.http.post<Customer>(this.baseUrl, customer, { headers: this.httpHeaders });
  }

  update(customer: Customer): Observable<Customer>  {
    return this.http.put<Customer>(this.baseUrl, customer, { headers: this.httpHeaders });
  }

  findById(idCustomer: string): Observable<Customer> {
    return this.http.get<Customer>( this.baseUrl + '/' + idCustomer);
  }

  findAll(): Observable<Customer[]> {
    return this.http.get(this.baseUrl).pipe( map(data => data as Customer[]) );
  }

  delete(idCustomer: string): Observable<Customer>  {
    return this.http.delete<Customer>(this.baseUrl + '/' + idCustomer, {headers: this.httpHeaders});
  }
}
