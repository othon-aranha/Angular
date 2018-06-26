import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ModuloListComponent } from './modulo-list.component';

const moduloRoutes = [
    { path: 'modulos', component: ModuloListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(moduloRoutes)],
    exports: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    declarations: []
})
export class ModuloRoutingModule {}
