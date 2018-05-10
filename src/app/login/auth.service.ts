import { Injectable } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Router } from '@angular/router';
import { Usuario } from '../domain/usuario';

@Injectable()
export class AuthService {
  private usuarioAutenticado = false;

  exibirMenuEmitter = new EventEmitter();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if ( usuario.cd_usuario === 'othon.aranha@tse.jus.br' && usuario.senha === '123456' ) {
      this.usuarioAutenticado = true;
      this.exibirMenuEmitter.emit('true');
      this.router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
      this.exibirMenuEmitter.emit('false');
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
