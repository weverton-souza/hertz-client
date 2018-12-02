import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Manufacturer } from '../model/manufacturer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ManufacturerService {

  private baseUrl = 'http://localhost:8080/app/manufacturers';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) { }

  save(manufacturer: Manufacturer): Observable<Manufacturer>  {
    return this.http.post<Manufacturer>(this.baseUrl, manufacturer, { headers: this.httpHeaders });
  }

  update(manufacturer: Manufacturer): Observable<Manufacturer>  {
    return this.http.put<Manufacturer>(this.baseUrl, manufacturer, { headers: this.httpHeaders });
  }

  findById(idManufacturer: string): Observable<Manufacturer> {
    return this.http.get<Manufacturer>( this.baseUrl + '/' + idManufacturer);
  }

  findAll(): Observable<Manufacturer[]> {
    return this.http.get(this.baseUrl).pipe( map(data => data as Manufacturer[]) );
  }

  delete(idManufacturer: string): Observable<Manufacturer>  {
    return this.http.delete<Manufacturer>(this.baseUrl + '/' + idManufacturer, {headers: this.httpHeaders});
  }
}
