import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../domain/usuario';
import { BaseResourceService } from '../shared/services/base-resource-service';

@Injectable()
export class UsuarioService extends BaseResourceService<Usuario> {

  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(protected injector: Injector) {
    super('http://localhost:8080/usuario', injector, Usuario.fromJson);
   }

  listarUsuarios() {
    return this.http.get<any[]>(this.apiPath + '/usuarios');
  }

  listarUsuariosporTipo(tipoUsuario: String) {
    return this.http.get<any>(this.apiPath + '/tipoUsuario/' + tipoUsuario, {headers: this.headers});
  }

  listarUsuariosporTipoEStatus(tipoUsuario: String, status: String) {
    return this.http.get<any>(this.apiPath + '/tipoUsuario/' + tipoUsuario + '/status/' + status, {headers: this.headers});
  }


  usuarioAutorizado(login: String, senha: String) {
    return this.http.get<any>(this.apiPath + '/login/' + login + '/senha/' + senha);
  }

}
