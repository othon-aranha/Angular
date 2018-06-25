import { Component, OnInit } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { Usuario } from '../domain/usuario';
import { AuthService } from '../service/auth.service';
import { InputTextModule } from 'primeng/primeng';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = null;

  constructor(private authService: AuthService) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }

  fazerLogin(usuario: string, senha: string) {
    this.usuario.cd_usuario = usuario;
    this.usuario.senha      = senha;
    console.log(this.usuario);
  }

}
