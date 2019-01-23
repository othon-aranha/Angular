import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { UsuarioService } from './service/usuario.service';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tribunal', loadChildren: './tribunal/tribunal.module#TribunalModule' },
  { path: 'modulo', loadChildren: './modulo/modulo.module#ModuloModule' },
  { path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioModule' },
  { path: 'dominio', loadChildren: './dominio/dominio.module#DominioModule' },
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
