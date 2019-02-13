import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../domain/usuario';
import { BaseResourceService } from '../shared/services/base-resource-service';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class UsuarioService extends BaseResourceService<Usuario> {

  constructor(protected injector: Injector) {
    super('http://localhost:8080/usuario', 'usuarios', injector, Usuario.fromJson);
   }

  listarUsuarios() {
    return this.http.get<any[]>(this.apiPath + '/usuarios');
  }

  listarUsuariosporTipo(tipoUsuario: String): Observable<Array<Usuario>> {
    return this.http.get<Array<Usuario>>(this.apiPath + '/usuarios' + '/tipoUsuario/' + tipoUsuario, {headers: this.headers});
  }

  listarUsuariosporTipoEStatus(tipoUsuario: String, status: String): Observable<Array<Usuario>> {
    return this.http.get<Array<Usuario>>(this.apiPath  + '/usuarios' + '/tipoUsuario/' + tipoUsuario
           + '/status/' + status, {headers: this.headers});
  }


  listarUsuariosporStatus(status: String): Observable<Array<Usuario>> {
    return this.http.get<Array<Usuario>>(this.apiPath  + '/usuarios' + '/status/' + status, {headers: this.headers});
  }

  usuarioAutorizado(login: String, senha: String): Observable<Usuario> {
    return this.http.get<Usuario>(this.apiPath + '/login/' + login + '/senha/' + senha, {headers: this.headers});
  }

}
