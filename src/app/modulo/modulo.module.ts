import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloComponent } from './modulo.component';
import { ModuloListComponent } from './modulo-list/modulo-list.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [],
    declarations: [ModuloComponent, ModuloListComponent],
    providers: []
})
export class ModuloModule { }
