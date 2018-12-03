import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TraffictTicket } from '../model/traffictTicket';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TraffictTicketService {

  private baseUrl = 'http://localhost:8080/app/tickets';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) { }

  save(traffictTicket: TraffictTicket): Observable<TraffictTicket>  {
    return this.http.post<TraffictTicket>(this.baseUrl, traffictTicket, { headers: this.httpHeaders });
  }

  update(traffictTicket: TraffictTicket): Observable<TraffictTicket>  {
    return this.http.put<TraffictTicket>(this.baseUrl, traffictTicket, { headers: this.httpHeaders });
  }

  findById(idTraffictTicket: string): Observable<TraffictTicket> {
    return this.http.get<TraffictTicket>( this.baseUrl + '/' + idTraffictTicket);
  }

  findAll(): Observable<TraffictTicket[]> {
    return this.http.get(this.baseUrl).pipe( map(data => data as TraffictTicket[]) );
  }

  delete(idTraffictTicket: string): Observable<TraffictTicket>  {
    return this.http.delete<TraffictTicket>(this.baseUrl + '/' + idTraffictTicket, {headers: this.httpHeaders});
  }
}
