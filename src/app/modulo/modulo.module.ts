<<<<<<< HEAD
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule, CalendarModule, ContextMenuModule } from 'primeng/primeng';
import { PaginatorModule, PasswordModule, RadioButtonModule } from 'primeng/primeng';
import { DataTableModule, DialogModule, DropdownModule   } from 'primeng/primeng';
import { InputMaskModule, InputTextModule, InputSwitchModule } from 'primeng/primeng';
import { ListboxModule, MultiSelectModule } from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';

import { ModuloRoutingModule } from './modulo.routing.module';
import { ModuloListComponent } from './modulo-list.component';
import { TipoAplicacaoMultiComponent } from '../tipo-aplicacao-multi/tipo-aplicacao-multi.component';
import { ModuloService } from '../service/modulo.service';

@NgModule({
  declarations: [TipoAplicacaoMultiComponent, ModuloListComponent],
  imports: [
    CommonModule,
    ButtonModule,
    CalendarModule,
    ContextMenuModule,
    DataTableModule,
    DialogModule,
    DropdownModule,
    InputMaskModule,
    InputTextModule,
    InputSwitchModule,
    HttpClientModule,
    ListboxModule,
    MultiSelectModule,
    PaginatorModule,
    PasswordModule,
    RadioButtonModule,
    TableModule,
    ModuloRoutingModule
  ],
  providers: [ModuloService, TipoAplicacaoMultiComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [ModuloListComponent]
=======
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
>>>>>>> f628028ff05876d80a1c6d3d5fe2da0352c2ce91
})
export class ModuloModule { }
