import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UsuarioService {

  private usuarioUrl = 'http://localhost:8080/usuario';

  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  // headers.Headers().set('Access-Control-Allow-Origin', 'localhost');

  constructor(private http: HttpClient) { }

  listarUsuarios() {
    return this.http.get<any[]>(this.usuarioUrl + '/usuarios');
  }

  listarUsuariosporTipo(tipoUsuario: String) {
    return this.http.get<any>(this.usuarioUrl + '/tipoUsuario/' + tipoUsuario, {headers: this.headers});
  }

  listarUsuariosporTipoEStatus(tipoUsuario: String, status: String) {
    return this.http.get<any>(this.usuarioUrl + '/tipoUsuario/' + tipoUsuario + '/status/' + status, {headers: this.headers});
  }


  usuarioAutorizado(login: String, senha: String) {
    return this.http.get<any>(this.usuarioUrl + '/login/' + login + '/senha/' + senha);
  }

}
