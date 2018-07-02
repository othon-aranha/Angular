import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ModuloService {

  private moduloUrl = 'http://localhost:8081/modulo';

  constructor(private http: HttpClient) { }

  listarModulos() {
    return this.http.get<any[]>(this.moduloUrl);
  }

  listarModulosporTipoModulo(tipoModulo: String) {
    return this.http.get<any[]>(this.moduloUrl + '/tipoModulo/' + tipoModulo);
  }

  listarModulosporTipoAtualizacao(tipoAtualizacao: String) {
    return this.http.get<any[]>(this.moduloUrl + '/tipoAtualizacao/' + tipoAtualizacao);
  }

}
