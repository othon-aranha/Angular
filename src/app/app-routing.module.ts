import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { UsuarioService } from './service/usuario.service';
import { TribunalComponent } from './tribunal/tribunal.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tribunal', component: TribunalComponent },
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
