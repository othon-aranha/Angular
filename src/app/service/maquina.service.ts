import { MaquinaServidora } from './../domain/maquina-servidora';
import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BaseResourceService } from '../shared/services/base-resource-service';

@Injectable()
export class MaquinaService extends BaseResourceService<MaquinaServidora> {

  constructor(protected injector: Injector) {
    super('http://localhost:8081/alias', injector, MaquinaServidora.fromJson);
   }


  listarMaquinas(): Observable<Array<MaquinaServidora>> {
    return  this.http.get<any[]>(this.apiPath + '/aliases', {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
    /* return new Promise((resolve, reject ) => {
      resolve( this.http.get<Array<MaquinaServidora>>(this.apiPath + '/aliases', {headers: this.headers}).toPromise() );
    }); */
  }

  listarServidoresdoModulo(cdModulo: number): Observable<Array<MaquinaServidora>> {
    return  this.http.get<Array<MaquinaServidora>>(this.apiPath + '/cdModulo/' + cdModulo, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

}
