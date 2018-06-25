import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { PasswordModule } from 'primeng/password';
import { Usuario } from '../domain/usuario';
import { AuthService } from '../service/auth.service';
import { InputTextModule } from 'primeng/primeng';
=======
import { AuthService } from '../service/auth.service';
import { Usuario } from '../domain/usuario';
import { ButtonModule } from 'primeng/button';
>>>>>>> f628028ff05876d80a1c6d3d5fe2da0352c2ce91

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  private usuario: Usuario = null;

  constructor(private authService: AuthService) {
    this.usuario = new Usuario();
  }
=======
  private usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }
>>>>>>> f628028ff05876d80a1c6d3d5fe2da0352c2ce91

  ngOnInit() {
  }

<<<<<<< HEAD
  fazerLogin(usuario: string, senha: string) {
    this.usuario.cd_usuario = usuario;
    this.usuario.senha      = senha;
=======
  fazerLogin() {
>>>>>>> f628028ff05876d80a1c6d3d5fe2da0352c2ce91
    console.log(this.usuario);
  }

}
