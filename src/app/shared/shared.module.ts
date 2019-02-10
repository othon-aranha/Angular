import { BarraNavegacaoComponent } from './components/shared/barra-navegacao/barra-navegacao.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { BreadcrumbModule } from 'primeng/primeng';


@NgModule({
  declarations: [FormFieldErrorComponent, BarraNavegacaoComponent],
  exports: [FormFieldErrorComponent, BarraNavegacaoComponent],
  imports: [CommonModule, BreadcrumbModule]
})
export class SharedModule { }
