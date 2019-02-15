import { ModuloFormComponent } from './modulo-form/modulo-form.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuloListComponent } from './modulo-list/modulo-list.component';

const moduloRoutes = [
    {path: 'modulo', component: ModuloListComponent},
    {path: 'modulo/:id/edit', component: ModuloFormComponent}
];

@NgModule({
    imports: [RouterModule.forChild(moduloRoutes)],
    exports: [RouterModule]
})
export class ModuloRoutingModule {}
