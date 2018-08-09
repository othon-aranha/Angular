import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService {

  private usuarioUrl = 'http://localhost:8080/usuario';

  constructor(private http: HttpClient) { }

  listarUsuarios() {
    return this.http.get<any[]>(this.usuarioUrl + '/usuarios');
  }

  listarUsuariosporTipo(tipoUsuario: String) {
    return this.http.get<any>(this.usuarioUrl + '/usuarios/tipoUsuario/' + tipoUsuario);
  }

  listarUsuariosporTipoEStatus(tipoUsuario: String, status: String) {
    return this.http.get<any>(this.usuarioUrl + '/usuarios/tipoUsuario/' + tipoUsuario + '/status/' + status);
  }


  usuarioAutorizado(login: String, senha: String) {
    return this.http.get<any>(this.usuarioUrl + '/login/' + login + '/senha/' + senha);
  }

}
