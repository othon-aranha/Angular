import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuloListComponent } from './modulo-list/modulo-list.component';
import { ModuloComponent } from './modulo.component';

const moduloRoutes = [
    {path: 'modulo', component: ModuloListComponent},
    {path: 'modulo/:id', component: ModuloComponent}
];

@NgModule({
    imports: [RouterModule.forChild(moduloRoutes)],
    exports: [RouterModule]
})
export class ModuloRoutingModule {}
