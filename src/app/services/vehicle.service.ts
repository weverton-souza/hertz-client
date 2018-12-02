import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vehicle } from '../model/vehicle';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class VehicleService {

  private baseUrl = 'http://localhost:8080/app/vehicles';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) { }

  save(vehicle: Vehicle): Observable<Vehicle>  {
    return this.http.post<Vehicle>(this.baseUrl, vehicle, { headers: this.httpHeaders });
  }

  update(vehicle: Vehicle): Observable<Vehicle>  {
    return this.http.put<Vehicle>(this.baseUrl, vehicle, { headers: this.httpHeaders });
  }

  findById(idVehicle: string): Observable<Vehicle> {
    return this.http.get<Vehicle>( this.baseUrl + '/' + idVehicle);
  }

  findAll(): Observable<Vehicle[]> {
    return this.http.get(this.baseUrl).pipe( map(data => data as Vehicle[]) );
  }

  delete(idVehicle: string): Observable<Vehicle>  {
    return this.http.delete<Vehicle>(this.baseUrl + '/' + idVehicle, {headers: this.httpHeaders});
  }
}
