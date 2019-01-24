import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatusMultiComponent } from '../../status-multi/status-multi.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { TipoUsuarioMultiComponent } from '../../tipo-usuario-multi/tipo-usuario-multi.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule, GrowlModule, InputTextModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';

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
    UsuarioRoutingModule
  ],
  exports: [],
  declarations: [TipoUsuarioMultiComponent, StatusMultiComponent, UsuarioListComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class UsuarioModule { }
