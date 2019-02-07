import { BarraNavegacaoComponent } from './components/shared/barra-navegacao/barra-navegacao.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';


@NgModule({
  declarations: [FormFieldErrorComponent],
  exports: [FormFieldErrorComponent],
  imports: [CommonModule]
})
export class SharedModule { }
