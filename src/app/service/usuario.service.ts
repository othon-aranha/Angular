import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../domain/usuario';
import { Observable } from 'rxjs';
import { BaseResourceService } from '../shared/services/base-resource-service';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class UsuarioService extends BaseResourceService<Usuario> {

  constructor(protected injector: Injector) {
    super('http://localhost:8080/usuario', injector, Usuario.fromJson);
   }

   protected getAllSufix(): string {
    return '/usuarios';
  }

  listarUsuarios(): Observable<Array<Usuario>> {
    return this.http.get<any[]>(this.apiPath + this.getAllSufix(), {headers: this.headers}).pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }


  listarUsuariosporTipo(tipoUsuario: String): Observable<Array<Usuario>> {
    return this.http.get<any>(this.apiPath + this.getAllSufix() + '/tipoUsuario/' + tipoUsuario, {headers: this.headers}).pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );;
  }

  listarUsuariosporTipoEStatus(tipoUsuario: String, status: String): Observable<Array<Usuario>> {
    return this.http.get<any>(this.apiPath + this.getAllSufix() + '/tipoUsuario/' + tipoUsuario + '/status/' + status,
    {headers: this.headers}).pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }


  usuarioAutorizado(login: String, senha: String): Observable<Array<Usuario>> {
    return this.http.get<any>(this.apiPath + '/login/' + login + '/senha/' + senha, {headers: this.headers}).pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

}
