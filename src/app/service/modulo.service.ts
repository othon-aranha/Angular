import { ModuloDTO } from './../dto/moduloDTO';
import { Modulo } from '../domain/modulo';
import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { BaseResourceService } from '../shared/services/base-resource-service';


@Injectable()
export class ModuloService extends BaseResourceService<Modulo>  {

  moduloUrl = 'http://localhost:8081/modulo';

   constructor(protected injector: Injector) {
    super('http://localhost:8081/modulo', injector, Modulo.fromJson);
   }


  recuperarModuloPorId(id: string): Observable<Modulo> {
    return this.http.get<Modulo>(this.moduloUrl + '/' + id, {headers: this.headers});
  }

  listarModulos(): Observable<Array<Modulo>> {
    return this.http.get<Array<Modulo>>(this.moduloUrl, {headers: this.headers});
  }

  listarModulosporTipoModulo(tipoModulo: String): Observable<Array<Modulo>> {
    return this.http.get<Array<Modulo>>(this.moduloUrl + '/tipoModulo/' + tipoModulo, {headers: this.headers});
  }

  listarModulosporTipoAtualizacao(tipoAtualizacao: String): Observable<Array<Modulo>> {
    return this.http.get<Array<Modulo>>(this.moduloUrl + '/tipoAtualizacao/' + tipoAtualizacao, {headers: this.headers});
  }

  listarModulosDTO(moduloDTO: ModuloDTO): Observable<Array<Modulo>> {
    return this.http.post<Array<Modulo>>(this.moduloUrl + '/tipoAtualizacao/', moduloDTO, {headers: this.headers});
  }

}
