import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-field-error',
  template: `
    <div *ngIf="( mustShowErrorMessage() )" class="alert alert-danger" role="alert">
      {{errorMessage}}
    </div>
  `,
  styleUrls: ['./form-field-error.component.css']
})
export class FormFieldErrorComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('form-control') formControl: FormControl;

  constructor() { }

  ngOnInit() {
  }

  public get errorMessage(): string | null {
    if ( this.mustShowErrorMessage() ) {
      return this.getErrorMessage();
    } else {
      return null;
    }
  }


  private mustShowErrorMessage(): boolean {
    if ( this.formControl !== null ) {
      return this.formControl.invalid && this.formControl.touched;
    } else {
      return false;
    }
  }

  private getErrorMessage(): string | null {
    if ( this.formControl.errors.required ) {
      return 'Dado obrigatório';
    } else if ( this.formControl.errors.email) {
      return 'Formato de email inválido';
    } else if ( this.formControl.errors.minlength ) {
      const requiredLength = this.formControl.errors.minlength.requiredLength;
      return `Campo deve possuir no mínimo ${requiredLength} caracteres`;
    } else if ( this.formControl.errors.maxlength ) {
      const requiredLength = this.formControl.errors.maxlength.requiredLength;
      return `Campo deve possuir no máximo ${requiredLength} caracteres`;
    }
  }
}
