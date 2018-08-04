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

  private usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin() {
    console.log(this.usuario);
    this.authService.fazerLogin(this.usuario.login, this.usuario.senha);
  }

}
