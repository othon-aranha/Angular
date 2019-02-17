import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoListComponent } from './grupo-list/grupo-list.component';
import { GrupoFormComponent } from './grupo-form/grupo-form.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContextMenuModule, DropdownModule, GrowlModule, InputTextModule, SharedModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/dialog';
import { ListboxModule } from 'primeng/listbox';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [GrupoListComponent, GrupoFormComponent],
  imports: [
    CommonModule,
    AutoCompleteModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    ContextMenuModule,
    DialogModule,
    DropdownModule,
    GrowlModule,
    InputTextModule,
    ListboxModule,
    SharedModule,
    TableModule,
    GrupoRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class GrupoModule { }
