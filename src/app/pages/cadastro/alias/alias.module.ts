import { SharedModule } from './../../../shared/shared.module';
import { ListboxModule } from 'primeng/listbox';
import { AliasService } from './../../../service/alias.service';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AliasListComponent } from './alias-list/alias-list.component';
import { AliasFormComponent } from './alias-form/alias-form.component';
import { TableModule } from 'primeng/table';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputTextModule, DropdownModule, GrowlModule, ContextMenuModule } from '../../../../../node_modules/primeng/primeng';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

import { AliasRoutingModule } from './alias.routing.module';


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
    TableModule,
    SharedModule,
    AliasRoutingModule
  ],
  declarations: [AliasFormComponent, AliasListComponent],
  providers: [ AliasService, ConfirmationService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AliasModule { }
