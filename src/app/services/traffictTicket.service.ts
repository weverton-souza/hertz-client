import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TrafficTicket } from '../model/trafficTicket';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TrafficTicketService {

  private baseUrl = 'http://localhost:8080/app/trafficTickets';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) { }

  save(trafficTicket: TrafficTicket): Observable<TrafficTicket>  {
    return this.http.post<TrafficTicket>(this.baseUrl, trafficTicket, { headers: this.httpHeaders });
  }

  update(trafficTicket: TrafficTicket): Observable<TrafficTicket>  {
    return this.http.put<TrafficTicket>(this.baseUrl, trafficTicket, { headers: this.httpHeaders });
  }

  findById(idTrafficTicket: string): Observable<TrafficTicket> {
    return this.http.get<TrafficTicket>( this.baseUrl + '/' + idTrafficTicket);
  }

  findAll(): Observable<TrafficTicket[]> {
    return this.http.get(this.baseUrl).pipe( map(data => data as TrafficTicket[]) );
  }

  delete(idTrafficTicket: string): Observable<TrafficTicket>  {
    return this.http.delete<TrafficTicket>(this.baseUrl + '/' + idTrafficTicket, {headers: this.httpHeaders});
  }
}
