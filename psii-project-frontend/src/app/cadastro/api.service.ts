import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private urlService = 'http://localhost:8080/rest/';

  constructor(private http: HttpClient) {}

  /**
   * Efetua a criação da entidade.
   * @param _url
   * @param _entity 
   */
  protected create<R>(_url: string, _entity: R): Observable<R> {
    return this.http.post<R>(this.urlService + _url, _entity, this.getHeaders()).pipe(map(data => data));
  }
  
  /**
   * Efetua a leitura da entidade
   * @param _url
   * @param id 
   */
  protected read<R>(_url: string, id): Observable<R> {
    return this.http.get<R>(this.urlService + _url + '/' + id, this.getHeaders()).pipe(map(data => data));
  }

  /**
   * Efetua o delete da entidade
   * @param _url
   * @param id 
   */
  protected delete<R>(_url: string, id): Observable<R> {
    return this.http.delete<R>(this.urlService + _url + '/' + id, this.getHeaders());
  }

  /**
   * Efetua a atualização da entidade
   * @param _url 
   * @param _id 
   * @param _entity 
   */
  protected update<R>(_url: string, _id, _entity: R): Observable<R> {
    return this.http.put<R>(this.urlService + _url + '/' + _id, _entity, this.getHeaders())
    .pipe(map(data => data));
  }


  /**
   * Efetua o getAll da entidade
   * @param _url
   * @param id 
   */
  protected readAll<R>(_url: string, id): Observable<R> {
    return this.http.get<R>(this.urlService + _url, this.getHeaders()).pipe(map(data => data));
  }


  private getHeaders() {
    const headers = { headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};

    return headers;
  }
}
