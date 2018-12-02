import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Model } from '../model/model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ModelService {

  private baseUrl = 'http://localhost:8080/app/models';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) { }

  save(model: Model): Observable<Model>  {
    return this.http.post<Model>(this.baseUrl, model, { headers: this.httpHeaders });
  }

  update(model: Model): Observable<Model>  {
    return this.http.put<Model>(this.baseUrl, model, { headers: this.httpHeaders });
  }

  findById(idModel: string): Observable<Model> {
    return this.http.get<Model>( this.baseUrl + '/' + idModel);
  }

  findAll(): Observable<Model[]> {
    return this.http.get(this.baseUrl).pipe( map(data => data as Model[]) );
  }

  delete(idModel: string): Observable<Model>  {
    return this.http.delete<Model>(this.baseUrl + '/' + idModel, {headers: this.httpHeaders});
  }
}
