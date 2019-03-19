import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';

const usuarioRoutes = [
    {path: 'usuario', component: UsuarioListComponent},
    {path: 'usuario/new', component: UsuarioFormComponent},
    {path: 'usuario/:id/edit', component: UsuarioFormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(usuarioRoutes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule {}
