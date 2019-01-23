import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';

const usuarioRoutes = [
    {path: 'usuario', component: UsuarioListComponent}
];

@NgModule({
    imports: [RouterModule.forChild(usuarioRoutes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule {}
