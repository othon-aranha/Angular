import { HttpErrorHandler } from './http-error-handler.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Dominio } from '../domain/dominio';


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


  getDominios(): Observable<Array<any>> {
    return this.http.get<Dominio[]>(this.url + '/dominios');
  }

  getDominioPeloNome(nome: String): Observable<Array<any>> {
    return this.http.get<Dominio[]>(this.url + '/nome/' + nome, {headers: this.headers});
  }

  getDominioPeloNomeeDescricao(nome, descricao: String): Observable<Array<any>> {
    return this.http.get<Dominio[]>(this.url + '/nome/' + nome + '/descricao/' + descricao, {headers: this.headers});
  }

  getDominioPeloNomeEDescricao(nome: String, descricao: String): Observable<Array<any>> {
    return this.http.get<Dominio[]>(this.url + '/nome/' + nome + '/descricao/' + descricao, {headers: this.headers});
  }

  getDominio(id: string): Observable<Dominio> {
    return this.http.get<Dominio>(this.getDominioUrl(id), {headers: this.headers});
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
