import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';

@Injectable()
export class AuthService {

  private usuarioAutenticado = false;
  private usuario: any;
  private senha: any;

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  fazerLogin(login: String, senha: String) {
    this.senha = this.usuarioService.encriptarsenha(senha);
    this.usuario = this.usuarioService.autenticarUsuario(login, this.senha).subscribe(dados => this.usuario = dados);
    if ( this.usuario.login !== null ) {
      this.usuarioAutenticado = true;
      this.router.navigate(['/home']);
    } else {
      this.usuarioAutenticado = false;
      this.router.navigate(['/login']);
    }
  }
}
