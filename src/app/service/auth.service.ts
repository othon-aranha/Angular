import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private usuarioAutenticado = false;
  mostrarMenuEmmitter = new EventEmitter();

  constructor(private router: Router) { }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
