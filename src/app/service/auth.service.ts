import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../domain/usuario';
import { UsuarioService } from './usuario.service';

@Injectable()
export class AuthService {

  private usuarioAutenticado = false;
  private usuario: any;

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  fazerLogin(usuario: Usuario) {
    this.usuarioService.usuarioAutorizado(usuario.login, usuario.senha).subscribe(dados => this.usuario = dados);
    if ( this.usuario !== null ) {
      this.usuarioAutenticado = true;
      this.router.navigate(['/home']);
    } else {
      this.usuarioAutenticado = false;
      this.router.navigate(['/login']);
    }
  }
}
