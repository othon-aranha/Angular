import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ModuloModule } from './modulo/modulo.module';
import { ModuloListComponent } from './modulo/modulo-list/modulo-list.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'modulos', component: ModuloListComponent },
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
  declarations: [ModuloListComponent]
})
export class AppRoutingModule { }
