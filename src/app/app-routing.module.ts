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
  { path: 'area', loadChildren: './pages/cadastro/area/area.module#AreaModule' },
  { path: 'grupo', loadChildren: './pages/cadastro/grupo/grupo.module#GrupoModule' },
  { path: 'tribunal', loadChildren: './pages/cadastro/tribunal/tribunal.module#TribunalModule' },
  { path: 'modulo', loadChildren: './pages/cadastro/modulo/modulo.module#ModuloModule' },
  { path: 'perfil', loadChildren: './pages/cadastro/perfil/perfil.module#PerfilModule' },
  { path: 'usuario', loadChildren: './pages/cadastro/usuario/usuario.module#UsuarioModule' },
  { path: 'usuario-area', loadChildren: './pages/cadastro/usuario-area/usuario-area.module#UsuarioAreaModule' },
  { path: 'dominio', loadChildren: './pages/cadastro/dominio/dominio.module#DominioModule' },
  { path: 'grupo', loadChildren: './pages/cadastro/grupo/grupo.module#GrupoModule' },
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
