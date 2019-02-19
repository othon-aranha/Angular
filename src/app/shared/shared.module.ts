import { ServidorListComponent } from './components/servidor-list/servidor-list.component';
import { BarraNavegacaoComponent } from './components/barra-navegacao/barra-navegacao.component';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { RouterModule } from '@angular/router';
import { ListboxModule } from 'primeng/primeng';


@NgModule({
  declarations: [FormFieldErrorComponent, BarraNavegacaoComponent, ServidorListComponent],
  exports: [FormFieldErrorComponent, BarraNavegacaoComponent, ServidorListComponent],
  imports: [CommonModule, ListboxModule, RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
