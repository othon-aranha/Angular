import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

import { UsuarioService } from './service/usuario.service';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'alias', loadChildren: './pages/cadastro/alias/alias.module#AliasModule' },
  { path: 'tribunal', loadChildren: './pages/cadastro/tribunal/tribunal.module#TribunalModule' },
  { path: 'modulo', loadChildren: './pages/cadastro/modulo/modulo.module#ModuloModule' },
  { path: 'usuario', loadChildren: './pages/cadastro/usuario/usuario.module#UsuarioModule' },
  { path: 'dominio', loadChildren: './pages/cadastro/dominio/dominio.module#DominioModule' },
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
