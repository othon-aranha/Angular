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
import { ModuloService } from '../service/modulo.service';
import { ServidorListComponent } from '../servidor-list/servidor-list.component';
import { ServidorService } from '../service/servidor.service';
import { MaquinaService } from '../service/maquina.service';

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
  declarations: [ModuloListComponent, TipoAplicacaoMultiComponent, ServidorListComponent],
  exports: [TipoAplicacaoMultiComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  providers: [ModuloService, ServidorService, MaquinaService, TipoAplicacaoMultiComponent]
})
export class ModuloModule { }
