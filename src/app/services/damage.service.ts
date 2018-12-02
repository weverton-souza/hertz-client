import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Damage } from '../model/damage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DamageService {

  private baseUrl = 'http://localhost:8080/app/damages';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) { }

  save(damage: Damage): Observable<Damage>  {
    return this.http.post<Damage>(this.baseUrl, damage, { headers: this.httpHeaders });
  }

  update(damage: Damage): Observable<Damage>  {
    return this.http.put<Damage>(this.baseUrl, damage, { headers: this.httpHeaders });
  }

  findById(idDamage: string): Observable<Damage> {
    return this.http.get<Damage>( this.baseUrl + '/' + idDamage);
  }

  findAll(): Observable<Damage[]> {
    return this.http.get(this.baseUrl).pipe( map(data => data as Damage[]) );
  }

  delete(idDamage: string): Observable<Damage>  {
    return this.http.delete<Damage>(this.baseUrl + '/' + idDamage, {headers: this.httpHeaders});
  }
}
