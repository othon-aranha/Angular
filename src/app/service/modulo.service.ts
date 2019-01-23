import { ModuloDTO } from './../dto/moduloDTO';
import { Modulo } from '../domain/modulo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable()
export class ModuloService {

  private moduloUrl = 'http://localhost:8081/modulo';

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  recuperarModuloPorId(id: string) {
    return this.http.get<Modulo>(this.moduloUrl + '/' + id, {headers: this.headers});
  }

  listarModulos() {
    return this.http.get<Array<Modulo>>(this.moduloUrl, {headers: this.headers});
  }

  listarModulosporTipoModulo(tipoModulo: String): Observable<Array<Modulo>> {
    return this.http.get<Array<Modulo>>(this.moduloUrl + '/tipoModulo/' + tipoModulo, {headers: this.headers});
  }

  listarModulosporTipoAtualizacao(tipoAtualizacao: String) {
    return this.http.get<Array<Modulo>>(this.moduloUrl + '/tipoAtualizacao/' + tipoAtualizacao, {headers: this.headers});
  }

  listarModulosDTO(moduloDTO: ModuloDTO) {
    return this.http.post<Array<Modulo>>(this.moduloUrl + '/tipoAtualizacao/', moduloDTO, {headers: this.headers});
  }

}
