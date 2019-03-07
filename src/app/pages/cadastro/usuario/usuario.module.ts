import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatusMultiComponent } from '../../../shared/components/status-multi/status-multi.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { TipoUsuarioMultiComponent } from '../../../shared/components/tipo-usuario-multi/tipo-usuario-multi.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule, GrowlModule, InputTextModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    ContextMenuModule,
    DialogModule,
    GrowlModule,
    InputTextModule,
    MultiSelectModule,
    TableModule,
    SharedModule,
    UsuarioRoutingModule
  ],
  exports: [],
  declarations: [TipoUsuarioMultiComponent, StatusMultiComponent, UsuarioListComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class UsuarioModule { }
