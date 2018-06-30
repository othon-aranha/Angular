import { ModuloListComponent } from './modulo-list/modulo-list.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { TableModule } from 'primeng/table';
import { GrowlModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TipoAplicacaoMultiComponent } from '../tipo-aplicacao-multi/tipo-aplicacao-multi.component';


@NgModule({
    imports: [
        Component,
        BrowserAnimationsModule,
        CommonModule,
        GrowlModule,
        ContextMenuModule,
        DialogModule,
        DropdownModule,
        HttpClientModule,
        InputTextModule,
        InputSwitchModule,
        TipoAplicacaoMultiComponent,
        TableModule
    ],
    exports: [],
    declarations: [],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class ModuloModule { }
