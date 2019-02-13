import { HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Dominio } from '../domain/dominio';
import { BaseResourceService } from '../shared/services/base-resource-service';

@Injectable()
export class DominioService extends BaseResourceService<Dominio> {

 constructor(protected injector: Injector) {
  super('http://localhost:8081/dominio', 'dominios', injector, Dominio.fromJson);
 }


  getDominios(): Observable<Array<Dominio>> {
    return this.http.get<Dominio[]>(this.apiPath + '/dominios', {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

  getDominioPeloNome(nome: String): Observable<Array<Dominio>> {
    return this.http.get<Dominio[]>(this.apiPath + '/nome/' + nome, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

  getDominioPeloNomeeDescricao(nome, descricao: String): Observable<Array<Dominio>> {
    return this.http.get<Dominio[]>(this.apiPath + '/nome/' + nome + '/descricao/' + descricao, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

  getDominioPeloNomeEDescricao(nome: String, descricao: String): Observable<Array<Dominio>> {
    return this.http.get<Dominio[]>(this.apiPath + '/nome/' + nome + '/descricao/' + descricao, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

  getDominio(id: string): Observable<Dominio> {
    return this.http.get<Dominio>(this.getDominioUrl(id), {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

  addDominio(dominio: Dominio) {
     return this.http.post<Dominio>(this.apiPath, JSON.stringify(dominio), {headers: this.headers})
    .subscribe((response) => console.log(response));
   }

   updateDominio(dominio: Dominio) {
    return this.http.put<Dominio>(this.apiPath, JSON.stringify(dominio), {headers: this.headers})
   .subscribe((response) => console.log(response));
  }

  deleteDominio(id) {
    return this.http.delete<Dominio>(this.getDominioUrl(id), {headers: this.headers})
    .subscribe((response) => console.log(response));
  }

  private getDominioUrl(id) {
    return this.apiPath + '/' + id;
  }
}
