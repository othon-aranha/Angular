import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilListComponent } from './perfil-list/perfil-list.component';
import { PerfilFormComponent } from './perfil-form/perfil-form.component';
import { PerfilRoutingModule } from './perfil.routing.module';
import { ConfirmDialogModule, ContextMenuModule, DropdownModule, GrowlModule, InputTextModule, ListboxModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { SharedModule } from '../../../shared/shared.module';
import { PerfilService } from '../../../service/perfil.service';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [PerfilListComponent, PerfilFormComponent],
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
    ReactiveFormsModule,
    TableModule,
    SharedModule,
    PerfilRoutingModule
  ],
  providers: [ PerfilService, ConfirmationService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class PerfilModule { }
