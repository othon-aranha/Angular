import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule, GrowlModule, ContextMenuModule } from '../../../node_modules/primeng/primeng';

import { DominioComponent } from './dominio.component';
import { DominioRoutingModule } from './dominio.routing.module';
import { DominioListComponent } from './dominio-list/dominio-list.component';


@NgModule({
  imports: [
    CommonModule,
    ContextMenuModule,
    DropdownModule,
    GrowlModule,
    TableModule,
    ReactiveFormsModule,
    DominioRoutingModule
  ],
  declarations: [DominioComponent, DominioListComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class DominioModule { }
