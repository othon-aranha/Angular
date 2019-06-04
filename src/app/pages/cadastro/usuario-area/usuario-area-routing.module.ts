import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsuarioAreaListComponent } from './usuario-area-list/usuario-area-list.component';
import { UsuarioAreaFormComponent } from './usuario-area-form/usuario-area-form.component';

const usuarioRoutes = [
  {path: 'usuario-area', component: UsuarioAreaListComponent},
  {path: 'usuario-area/new', component: UsuarioAreaFormComponent},
  {path: 'usuario-area/:id/edit', component: UsuarioAreaFormComponent}
];


@NgModule({
  imports: [RouterModule.forChild(usuarioRoutes)],
  exports: [RouterModule]
})
export class UsuarioAreaRoutingModule { }
