import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuloComponent } from '../modulo/modulo.component';

const routes: Routes = [
  { path: '', redirectTo: '/modulo', pathMatch: 'full' },
  { path: 'modulo',  component: ModuloComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
