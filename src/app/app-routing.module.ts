import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ModuloListComponent } from './modulo/modulo-list.component';
import { UsuarioListComponent } from './usuario/usuario-list/usuario-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { UsuarioService } from './service/usuario.service';
import { ModuloModule } from './modulo/modulo.module';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [UsuarioService],
  declarations: []
})
export class AppRoutingModule { }
