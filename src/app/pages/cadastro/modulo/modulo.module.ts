import { AutoCompleteModule } from 'primeng/autocomplete';
import { SharedModule } from './../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModuloFormComponent } from './modulo-form/modulo-form.component';
import { TipoAplicacaoMultiComponent } from '../../../shared/components/tipo-aplicacao-multi/tipo-aplicacao-multi.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { TableModule } from 'primeng/table';
import { InputTextModule, ConfirmDialogModule, DropdownModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';

import { ModuloListComponent } from './modulo-list/modulo-list.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloRoutingModule } from './modulo.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AliasService } from './../../../service/alias.service';
import { ModuloService } from '../../../service/modulo.service';
import { MaquinaService } from '../../../service/maquina.service';
import { ModuloComponent } from './modulo.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ListboxModule } from 'primeng/listbox';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AutoCompleteModule,
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
    MatAutocompleteModule,
    MultiSelectModule,
    ReactiveFormsModule,
    TableModule,
    SharedModule,
    ModuloRoutingModule
  ],
  declarations: [ModuloListComponent, ModuloFormComponent, ModuloComponent,
                 TipoAplicacaoMultiComponent],
  exports: [TipoAplicacaoMultiComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  providers: [ModuloService, AliasService, MaquinaService, TipoAplicacaoMultiComponent]
})
export class ModuloModule { }
