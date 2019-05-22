import { ServidorListComponent } from './components/servidor-list/servidor-list.component';
import { BarraNavegacaoComponent } from './components/barra-navegacao/barra-navegacao.component';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { RouterModule } from '@angular/router';
import { ListboxModule, MultiSelectModule, CheckboxModule } from 'primeng/primeng';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { TipoUsuarioMultiComponent } from './components/tipo-usuario-multi/tipo-usuario-multi.component';
import { StatusMultiComponent } from './components/status-multi/status-multi.component';
import { EnumToArrayPipe } from './pipes/enum-to-array-pipe';


@NgModule({
  declarations: [FormFieldErrorComponent, BarraNavegacaoComponent, ServidorListComponent, TipoUsuarioMultiComponent, StatusMultiComponent,
                 EnumToArrayPipe],
  exports: [FormFieldErrorComponent, BarraNavegacaoComponent, ServidorListComponent, TipoUsuarioMultiComponent, StatusMultiComponent,
            EnumToArrayPipe],
  imports: [CommonModule, CheckboxModule, ListboxModule, MultiSelectModule, RouterModule, ScrollPanelModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
