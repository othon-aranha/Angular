import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuloListComponent } from './modulo-list.component';

const moduloRoutes = [
    {path: 'modulo-list', component: ModuloListComponent}
];

@NgModule({
    imports: [RouterModule.forChild(moduloRoutes)],
    exports: [RouterModule]
})
export class ModuloRoutingModule {}
