import { PerfilFormComponent } from './perfil-form/perfil-form.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PerfilListComponent } from './perfil-list/perfil-list.component';

const perfilRoutes = [
    {path: 'perfil', component: PerfilListComponent},
    {path: 'perfil/new', component: PerfilFormComponent},
    {path: 'perfil/:id/edit', component: PerfilFormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(perfilRoutes)],
    exports: [RouterModule]
})
export class PerfilRoutingModule {}
