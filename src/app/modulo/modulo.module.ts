import { TipoAplicacaoMultiComponent } from '../tipo-aplicacao-multi/tipo-aplicacao-multi.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { TableModule } from 'primeng/table';
import { InputTextModule, ConfirmDialogModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';

import { ModuloListComponent } from './modulo-list.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloRoutingModule } from './modulo.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    ContextMenuModule,
    DialogModule,
    GrowlModule,
    InputTextModule,
    MultiSelectModule,
    TableModule,
    ModuloRoutingModule
  ],
  declarations: [ModuloListComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class ModuloModule { }
