import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule, DropdownModule, GrowlModule, ContextMenuModule } from '../../../node_modules/primeng/primeng';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { DominioComponent } from './dominio.component';
import { DominioRoutingModule } from './dominio.routing.module';
import { DominioListComponent } from './dominio-list/dominio-list.component';
import { DominioService } from '../service/dominio.service';


@NgModule({
  imports: [
    AutoCompleteModule,
    ButtonModule,
    CommonModule,
    ContextMenuModule,
    ConfirmDialogModule,
    DropdownModule,
    GrowlModule,
    TableModule,
    ReactiveFormsModule,
    DominioRoutingModule
  ],
  declarations: [DominioComponent, DominioListComponent],
  providers: [DominioService, ConfirmationService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class DominioModule { }
