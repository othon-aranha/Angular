import { ModuloDTO } from './../dto/moduloDTO';
import { Modulo } from '../domain/modulo';
import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BaseResourceService } from '../shared/services/base-resource-service';


@Injectable()
export class ModuloService extends BaseResourceService<Modulo>  {

  moduloUrl = 'http://localhost:8081/modulo';

   constructor(protected injector: Injector) {
    super('http://localhost:8081/modulo', injector, Modulo.fromJson);
   }


  recuperarModuloPorId(id: string): Observable<Modulo> {
    return this.http.get<Modulo>(this.moduloUrl + '/' + id, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

  listarModulos(): Observable<Array<Modulo>> {
    return this.http.get<Array<Modulo>>(this.moduloUrl, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

  listarModulosporTipoModulo(tipoModulo: String): Observable<Array<Modulo>> {
    return this.http.get<Array<Modulo>>(this.moduloUrl + '/tipoModulo/' + tipoModulo, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

  listarModulosporTipoAtualizacao(tipoAtualizacao: String): Observable<Array<Modulo>> {
    return this.http.get<Array<Modulo>>(this.moduloUrl + '/tipoAtualizacao/' + tipoAtualizacao, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

  listarModulosDTO(moduloDTO: ModuloDTO): Observable<Array<Modulo>> {
    return this.http.post<Array<Modulo>>(this.moduloUrl + '/tipoAtualizacao/', moduloDTO, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

}
