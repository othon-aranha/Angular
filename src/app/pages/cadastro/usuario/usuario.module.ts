import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatusMultiComponent } from '../../../shared/components/status-multi/status-multi.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { TipoUsuarioMultiComponent } from '../../../shared/components/tipo-usuario-multi/tipo-usuario-multi.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule, GrowlModule, InputTextModule, CheckboxModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from '../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    CheckboxModule,
    ContextMenuModule,
    DialogModule,
    GrowlModule,
    InputTextModule,
    MultiSelectModule,
    ReactiveFormsModule,
    TableModule,
    SharedModule,
    UsuarioRoutingModule
  ],
  exports: [],
  declarations: [UsuarioFormComponent, UsuarioListComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class UsuarioModule { }
