import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tribunal } from './../domain/tribunal';
import { TribunalService } from '../service/tribunal.service';
import { Route, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tribunal',
  templateUrl: './tribunal.component.html',
  styleUrls: ['./tribunal.component.css']
})

export class TribunalComponent implements OnInit {
  id: string;
  tribunal: Tribunal;
  form: FormGroup;
  UFs = [];

  constructor(private formBuilder: FormBuilder, private tribunalService: TribunalService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.UFs = [{value: 'AC', viewValue: 'Acre'},
                {value: 'AL', viewValue: 'Alagoas'},
                {value: 'AM', viewValue: 'Amazonas'},
                {value: 'AP', viewValue: 'Amapá'}];

    this.tribunal = null;

    if ( this.route.snapshot.paramMap.has('id') ) {
      this.id = this.route.snapshot.paramMap.get('id');
    } else {
      this.id = null;
    }

    this.tribunal = new Tribunal();

    if ( this.id ) {
      this.recuperarTribunal(this.id);
    }

    this.inicializaForm();
  }

  recuperarTribunal(id: string) {
    this.tribunalService.recuperarTribunal(id).subscribe(dados => this.tribunal = dados);
  }

  inicializaForm() {
    if ( this.tribunal ) {
      this.form = this.formBuilder.group({
        id: [this.tribunal.id, [Validators.required] ],
        nome: [this.tribunal.nome, [Validators.required, Validators.minLength(6)] ],
        sigla: [this.tribunal.sigla, [Validators.required, Validators.minLength(1)] ],
        logradouro: [this.tribunal.logradouro, [Validators.required, Validators.minLength(1)] ],
        bairro: [this.tribunal.bairro, [Validators.required, Validators.minLength(1)] ],
        uf: [this.tribunal.uf, [Validators.required, Validators.minLength(1)] ],
        cep: [this.tribunal.cep, [Validators.required, Validators.minLength(1)] ],
        cidade: [this.tribunal.cidade, [Validators.required, Validators.minLength(1)] ],
        telefone: [this.tribunal.telefone, [Validators.required, Validators.minLength(1)] ],
        cgc: [this.tribunal.cgc, [Validators.required, Validators.minLength(1)] ],
        numeroContrato: [this.tribunal.numeroContrato, [Validators.required, Validators.minLength(1)] ],
        descricaoContrato: [this.tribunal.descricaoContrato, [Validators.required, Validators.minLength(1)] ],
        codigoMunicipioIBGE: [this.tribunal.codigoMunicipioIBGE, [Validators.required, Validators.minLength(1)] ],
        codigoNaturezaJuridica: [this.tribunal.codigoNaturezaJuridica, [Validators.required, Validators.minLength(1)] ],
        email: [this.tribunal.email, [Validators.required, Validators.minLength(1)] ]
       });
    } else {
     this.form = this.formBuilder.group({
      id: ['', [Validators.required] ],
      nome: ['', [Validators.required, Validators.minLength(6)] ],
      sigla: ['', [Validators.required, Validators.minLength(1)] ],
      logradouro: ['', [Validators.required, Validators.minLength(1)] ],
      bairro: ['', [Validators.required, Validators.minLength(1)] ],
      uf: ['', [Validators.required, Validators.minLength(1)] ],
      cep: ['', [Validators.required, Validators.minLength(1)] ],
      cidade: ['', [Validators.required, Validators.minLength(1)] ],
      telefone: ['', [Validators.required, Validators.minLength(1)] ],
      cgc: ['', [Validators.required, Validators.minLength(1)] ],
      numeroContrato: ['', [Validators.required, Validators.minLength(1)] ],
      descricaoContrato: ['', [Validators.required, Validators.minLength(1)] ],
      codigoMunicipioIBGE: ['', [Validators.required, Validators.minLength(1)] ],
      codigoNaturezaJuridica: ['', [Validators.required, Validators.minLength(1)] ],
      email: ['', [Validators.required, Validators.minLength(1)] ]
    });
   }
  }


}
