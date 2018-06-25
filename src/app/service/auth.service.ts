import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { EventEmitter } from 'events';
import { Router } from '@angular/router';
=======
>>>>>>> f628028ff05876d80a1c6d3d5fe2da0352c2ce91

@Injectable()
export class AuthService {

<<<<<<< HEAD
  private usuarioAutenticado = false;
  mostrarMenuEmmitter = new EventEmitter();

  constructor(private router: Router) { }

  usuarioEstaAutenticado(usuario: string, senha: string) {
    this.usuarioAutenticado = ( usuario === 'OTHON_ARANHA' ) && ( senha === 'Othon092670' );
    return this.usuarioAutenticado;
  }
=======
  constructor() { }

>>>>>>> f628028ff05876d80a1c6d3d5fe2da0352c2ce91
}
