import { ModuloDTO } from './../dto/moduloDTO';
import { Modulo } from '../domain/modulo';
import { Injectable, Injector } from '@angular/core';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BaseResourceService } from '../shared/services/base-resource-service';


@Injectable()
export class ModuloService extends BaseResourceService<Modulo>  {

   constructor(protected injector: Injector) {
    super('http://localhost:8081/modulo', 'modulos', injector, Modulo.fromJson);
   }


  listarModulos(): Observable<Array<Modulo>> {
    return this.http.get<Array<Modulo>>(this.apiPath, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

  listarModulosporTipoModulo(tipoModulo: String): Observable<Array<Modulo>> {
    return this.http.get<Array<Modulo>>(this.apiPath + '/tipoModulo/' + tipoModulo, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

  listarModulosporTipoAtualizacao(tipoAtualizacao: String): Observable<Array<Modulo>> {
    return this.http.get<Array<Modulo>>(this.apiPath + '/tipoAtualizacao/' + tipoAtualizacao, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

  listarModulosDTO(moduloDTO: ModuloDTO): Observable<Array<Modulo>> {
    return this.http.post<Array<Modulo>>(this.apiPath + '/tipoAtualizacao/', moduloDTO, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

}
