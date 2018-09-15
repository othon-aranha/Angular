import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ModuloService {

  private moduloUrl = 'http://localhost:8081/modulo';

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  recuperarModuloPorId(id: string) {
    return this.http.get<any>(this.moduloUrl + '/' + id, {headers: this.headers});
  }

  listarModulos() {
    return this.http.get<any[]>(this.moduloUrl, {headers: this.headers});
  }

  listarModulosporTipoModulo(tipoModulo: String) {
    return this.http.get<any[]>(this.moduloUrl + '/tipoModulo/' + tipoModulo, {headers: this.headers});
  }

  listarModulosporTipoAtualizacao(tipoAtualizacao: String) {
    return this.http.get<any[]>(this.moduloUrl + '/tipoAtualizacao/' + tipoAtualizacao, {headers: this.headers});
  }

}
