import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ModuloModule } from './modulo/modulo.module';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    ModuloModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule, ModuloModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: []
})
export class AppRoutingModule { }
