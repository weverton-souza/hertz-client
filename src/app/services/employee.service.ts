import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/employee';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private baseUrl = 'http://localhost:8080/app/employees';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) { }

  save(employee: Employee): Observable<Employee>  {
    return this.http.post<Employee>(this.baseUrl, employee, { headers: this.httpHeaders });
  }

  update(employee: Employee): Observable<Employee>  {
    return this.http.put<Employee>(this.baseUrl, employee, { headers: this.httpHeaders });
  }

  findById(idEmployee: string): Observable<Employee> {
    return this.http.get<Employee>( this.baseUrl + '/' + idEmployee);
  }

  findAll(): Observable<Employee[]> {
    return this.http.get(this.baseUrl).pipe( map(data => data as Employee[]) );
  }

  delete(idEmployee: string): Observable<Employee>  {
    return this.http.delete<Employee>(this.baseUrl + '/' + idEmployee, {headers: this.httpHeaders});
  }
}
