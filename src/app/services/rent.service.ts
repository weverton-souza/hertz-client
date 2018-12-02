import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rent } from '../model/rent';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RentService {

  private baseUrl = 'http://localhost:8080/app/rents';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) { }

  save(rent: Rent): Observable<Rent>  {
    return this.http.post<Rent>(this.baseUrl, rent, { headers: this.httpHeaders });
  }

  update(rent: Rent): Observable<Rent>  {
    return this.http.put<Rent>(this.baseUrl, rent, { headers: this.httpHeaders });
  }

  findById(idRent: string): Observable<Rent> {
    return this.http.get<Rent>( this.baseUrl + '/' + idRent);
  }

  findAll(): Observable<Rent[]> {
    return this.http.get(this.baseUrl).pipe( map(data => data as Rent[]) );
  }

  delete(idRent: string): Observable<Rent>  {
    return this.http.delete<Rent>(this.baseUrl + '/' + idRent, {headers: this.httpHeaders});
  }
}
