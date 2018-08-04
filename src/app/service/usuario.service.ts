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
    return this.http.get<any[]>(this.usuarioUrl + '/tipoUsuario/' + tipoUsuario);
  }

  autenticarUsuario(usuario: String, senha: String) {
    return this.http.get<any>(this.usuarioUrl + '/login/' + usuario + '/senha/' + senha);
  }

  encriptarsenha(senha: String) {
    return this.http.get<String>(this.usuarioUrl + '/senha/' + senha);
  }

}
