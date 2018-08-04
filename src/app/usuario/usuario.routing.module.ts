import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsuarioListComponent } from './usuario-list.component';

const usuarioRoutes = [
    {path: 'usuarios', Component: UsuarioListComponent}
];

@NgModule({
    imports: [RouterModule.forChild(usuarioRoutes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule {}
