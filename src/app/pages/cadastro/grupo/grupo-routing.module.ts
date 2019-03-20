import { GrupoFormComponent } from './grupo-form/grupo-form.component';
import { GrupoListComponent } from './grupo-list/grupo-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const grupoRoutes = [
  {path: 'grupo', component: GrupoListComponent},
  {path: 'grupo/new', component: GrupoFormComponent},
  {path: 'grupo/:id/edit', component: GrupoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(grupoRoutes)],
  exports: [RouterModule]
})
export class GrupoRoutingModule { }
