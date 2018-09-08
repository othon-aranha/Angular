import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tribunal } from './../domain/tribunal';


@Component({
  selector: 'app-tribunal',
  templateUrl: './tribunal.component.html',
  styleUrls: ['./tribunal.component.css']
})

export class TribunalComponent implements OnInit {
  tribunal: Tribunal;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  inicializaForm() {
    if ( this.tribunal ) {
      this.form = this.formBuilder.group({
        id: [this.tribunal.id, [Validators.required] ],
        nome: [this.tribunal.nome, [Validators.required, Validators.minLength(6)] ],
        cd: [this.tribunal.sigla, [Validators.required, Validators.minLength(1)] ],
        logradouro: [this.tribunal.logradouro, [Validators.required, Validators.minLength(1)] ]
      });
    } else {
     this.form = this.formBuilder.group({
      id: ['', [Validators.required] ],
      nome: ['', [Validators.required, Validators.minLength(6)] ],
      cd: ['', [Validators.required, Validators.minLength(1)] ],
      logradouro: ['', [Validators.required, Validators.minLength(1)] ]
    });
   }
  }


}
