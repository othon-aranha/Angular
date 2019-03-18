import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';
import { AccordionModule } from 'primeng/accordion';
import { ConfirmDialogModule, GrowlModule, InputTextModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { AreaListComponent } from './area-list/area-list.component';
import { AreaFormComponent } from './area-form/area-form.component';
import { SharedModule } from '../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AreaListComponent, AreaFormComponent],
  imports: [
    AccordionModule,
    CommonModule,
    ConfirmDialogModule,
    ContextMenuModule,
    DialogModule,
    ReactiveFormsModule,
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
