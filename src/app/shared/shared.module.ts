import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { BaseListFormComponent } from './components/base-list-form/base-list-form.component';

@NgModule({
  declarations: [FormFieldErrorComponent, BaseListFormComponent],
  exports: [FormFieldErrorComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
