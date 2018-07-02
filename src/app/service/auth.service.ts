import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';
import { Router } from '@angular/router';
import { Usuario } from '../domain/usuario';

@Injectable()
export class AuthService {

  private usuarioAutenticado = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if ( usuario.cd_usuario === 'OTHON_ARANHA' && usuario.senha === 'Othon092670' ) {
      this.usuarioAutenticado = true;
      this.router.navigate(['/modulos']);
    } else {
      this.usuarioAutenticado = false;
    }
  }
}
