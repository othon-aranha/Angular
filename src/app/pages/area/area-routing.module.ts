import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaListComponent } from './area-list/area-list.component';
import { AreaFormComponent } from './area-form/area-form.component';

const routes: Routes = [
  {path: 'area', component: AreaListComponent},
  {path: 'area/:id/edit', component: AreaFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRoutingModule { }
