import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ButtonModule, CheckboxModule, ConfirmDialogModule, DropdownModule, GrowlModule } from 'primeng/primeng';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoListComponent } from './grupo-list/grupo-list.component';
import { GrupoFormComponent } from './grupo-form/grupo-form.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [GrupoListComponent, GrupoFormComponent],
  imports: [
    AutoCompleteModule,
    ButtonModule,
    CheckboxModule,
    CommonModule,
    ContextMenuModule,
    ConfirmDialogModule,
    DropdownModule,
    GrowlModule,
    TableModule,
    SharedModule,
    ReactiveFormsModule,
    GrupoRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class GrupoModule { }
