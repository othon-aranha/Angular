import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuloListComponent } from './modulo-list/modulo-list.component';
import { ModuloComponent } from './modulo.component';

const moduloRoutes = [
    {path: 'modulo-list', component: ModuloListComponent},
    {path: 'modulo', component: ModuloComponent},
    {path: 'modulo/:id', component: ModuloComponent}
];

@NgModule({
    imports: [RouterModule.forChild(moduloRoutes)],
    exports: [RouterModule]
})
export class ModuloRoutingModule {}
