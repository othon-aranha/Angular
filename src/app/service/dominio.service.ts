import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Dominio } from '../domain/dominio';
import { Observable } from '../../../node_modules/rxjs';
import { Options } from '../../../node_modules/@types/selenium-webdriver/firefox';
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
  private handleError: HandleError;

 /*
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler ) {
    this.handleError = httpErrorHandler.createHandleError('DominioService');
   }
  */

  constructor(private http: HttpClient) {

  }

  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');


  getDominios() {
    return this.http.get(this.url + '/dominios');
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
    return this.http.put<Dominio>(this.url, JSON.stringify(dominio))
   .subscribe((response) => console.log(response));
  }

  deleteDominio(id) {
    return this.http.delete<Dominio>(this.getDominioUrl(id))
    .subscribe((response) => console.log(response));
  }

  private getDominioUrl(id) {
    return this.url + '/' + id;
  }
}
