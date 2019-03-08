import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoListComponent } from './grupo-list/grupo-list.component';
import { GrupoFormComponent } from './grupo-form/grupo-form.component';

const routes: Routes = [
  {path: 'grupo', component: GrupoListComponent},
  {path: 'grupo/new', component: GrupoFormComponent},
  {path: 'grupo/:id/edit', component: GrupoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoRoutingModule { }
