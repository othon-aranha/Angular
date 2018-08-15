import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Dominio } from '../domain/dominio';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable()
export class DominioService {
  private url = 'http://localhost:8081/dominio';

 /*
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler ) {
    this.handleError = httpErrorHandler.createHandleError('DominioService');
   }
  */

  constructor(private http: HttpClient) {

  }

  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');


  getDominios() {
    return this.http.get<any[]>(this.url + '/dominios');
  }

  getDominioPeloNome(nome: String) {
    return this.http.get<any[]>(this.url + '/nome/' + nome, {headers: this.headers});
  }

  getDominio(id) {
    return this.http.get<Dominio>(this.getDominioUrl(id))
    .subscribe((response) => console.log(response));
  }

  addDominio(dominio: Dominio) {
     return this.http.post<Dominio>(this.url, JSON.stringify(dominio), {headers: this.headers})
    .subscribe((response) => console.log(response));
   }

   updateDominio(dominio: Dominio) {
    return this.http.put<Dominio>(this.url, JSON.stringify(dominio), {headers: this.headers})
   .subscribe((response) => console.log(response));
  }

  deleteDominio(id) {
    return this.http.delete<Dominio>(this.getDominioUrl(id), {headers: this.headers})
    .subscribe((response) => console.log(response));
  }

  private getDominioUrl(id) {
    return this.url + '/' + id;
  }
}
