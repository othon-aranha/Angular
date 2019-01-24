import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

import { UsuarioService } from './service/usuario.service';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tribunal', loadChildren: './pages/tribunal/tribunal.module#TribunalModule' },
  { path: 'modulo', loadChildren: './pages/modulo/modulo.module#ModuloModule' },
  { path: 'usuario', loadChildren: './pages/usuario/usuario.module#UsuarioModule' },
  { path: 'dominio', loadChildren: './pages/dominio/dominio.module#DominioModule' },
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
