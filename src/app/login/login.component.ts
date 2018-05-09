import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Usuario } from '../domain/usuario';
import { ButtonModule } from 'primeng/button';

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
  }

}
