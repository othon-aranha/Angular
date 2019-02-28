import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';
import { ConfirmDialogModule, GrowlModule, InputTextModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { AreaListComponent } from './area-list/area-list.component';
import { AreaFormComponent } from './area-form/area-form.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [AreaListComponent, AreaFormComponent],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    ContextMenuModule,
    DialogModule,
    GrowlModule,
    InputTextModule,
    TableModule,
    SharedModule,
    AreaRoutingModule
  ],
  exports: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AreaModule { }