import { map, catchError } from 'rxjs/operators';
import { Usuario } from './../domain/usuario';
import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseResourceService } from '../shared/services/base-resource-service';
import { Observable } from 'rxjs';

@Injectable()
export class UsuarioService extends BaseResourceService<Usuario> {

  constructor(protected injector: Injector) {
    super('http://localhost:8080/usuario', injector, Usuario.fromJson);
   }


  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiPath + '/usuarios', {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

  listarUsuariosporTipo(tipoUsuario: String): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiPath + '/tipoUsuario/' + tipoUsuario, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

  listarUsuariosporTipoEStatus(tipoUsuario: String, status: String): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiPath + '/tipoUsuario/' + tipoUsuario + '/status/' + status, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }


  usuarioAutorizado(login: String, senha: String): Observable<Usuario> {
    return this.http.get<Usuario>(this.apiPath + '/login/' + login + '/senha/' + senha, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handleError)
    );
  }

}
