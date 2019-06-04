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
import { ConfirmDialogModule, GrowlModule, InputTextModule, CheckboxModule, InputSwitchModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { SharedModule } from '../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioAreaModule } from '../usuario-area/usuario-area.module';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  imports: [
    AutoCompleteModule,
    CommonModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    CheckboxModule,
    ContextMenuModule,
    DialogModule,
    GrowlModule,
    InputSwitchModule,
    InputTextModule,
    MultiSelectModule,
    ReactiveFormsModule,
    TableModule,
    TabViewModule,
    SharedModule,
    UsuarioAreaModule,
    UsuarioRoutingModule
  ],
  exports: [],
  declarations: [UsuarioFormComponent, UsuarioListComponent, UsuarioListComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class UsuarioModule { }
