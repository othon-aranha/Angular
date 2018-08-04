import { Usuario } from './domain/usuario';
import { UsuarioService } from './service/usuario.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModuloListComponent } from './modulo/modulo-list.component';
import { UsuarioListComponent } from './usuario/usuario-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'modulos', component: ModuloListComponent },
  { path: 'usuarios', component: UsuarioListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [ UsuarioService ],
  declarations: []
})
export class AppRoutingModule { }
