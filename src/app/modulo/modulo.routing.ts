import { ModuloListComponent } from './modulo-list/modulo-list.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const moduloRoutes: Routes = [
  { path: 'modulos', component: ModuloListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(moduloRoutes)
  ],
  exports: [RouterModule],
  declarations: [ModuloListComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ModuloRoutingModule { }
