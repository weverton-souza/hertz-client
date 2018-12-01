import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../model/category';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  private baseUrl = 'http://localhost:8080/app/categories';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor( private http: HttpClient ) { }

  save(category: Category): Observable<Category>  {
    return this.http.post<Category>(this.baseUrl, category, { headers: this.httpHeaders });
  }

  update(category: Category): Observable<Category>  {
    return this.http.put<Category>(this.baseUrl, category, { headers: this.httpHeaders });
  }

  findById(idCategory: string): Observable<Category> {
    return this.http.get<Category>( this.baseUrl + '/' + idCategory);
  }

  findAll(): Observable<Category[]> {
    return this.http.get(this.baseUrl).pipe( map(data => data as Category[]) );
  }

  delete(idCategory: number): Observable<Category>  {
    return this.http.delete<Category>('${this.baseUrl}/${idCategory}', { headers: this.httpHeaders });
  }
}
