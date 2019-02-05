import { BarraNavegacaoComponent } from './../shared/barra-navegacao/barra-navegacao.component';
import { ModuloFormComponent } from './modulo-form/modulo-form.component';
import { TipoAplicacaoMultiComponent } from '../../shared/components/tipo-aplicacao-multi/tipo-aplicacao-multi.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { TableModule } from 'primeng/table';
import { InputTextModule, ConfirmDialogModule, DropdownModule, InputSwitch } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';

import { ModuloListComponent } from './modulo-list/modulo-list.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloRoutingModule } from './modulo.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AliasService } from './../../service/alias.service';
import { ModuloService } from '../../service/modulo.service';
import { ServidorListComponent } from '../../servidor-list/servidor-list.component';
import { MaquinaService } from '../../service/maquina.service';
import { ModuloComponent } from './modulo.component';
import { MatSelectModule, MatInputModule } from '@angular/material';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  imports: [
    CommonModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    ContextMenuModule,
    DialogModule,
    DropdownModule,
    GrowlModule,
    InputSwitchModule,
    InputTextModule,
    ListboxModule,
    MatInputModule,
    MultiSelectModule,
    MatSelectModule,
    TableModule,
    ModuloRoutingModule
  ],
  declarations: [ModuloListComponent, ModuloFormComponent, ModuloComponent,
                 TipoAplicacaoMultiComponent, ServidorListComponent],
  exports: [TipoAplicacaoMultiComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  providers: [ModuloService, AliasService, MaquinaService, TipoAplicacaoMultiComponent]
})
export class ModuloModule { }
