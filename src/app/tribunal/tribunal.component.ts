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
  ufs = [];
  rota: string;

  constructor(private formBuilder: FormBuilder, private tribunalService: TribunalService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.ufs = [{value: 'AC', viewValue: 'Acre'},
                {value: 'AL', viewValue: 'Alagoas'},
                {value: 'AM', viewValue: 'Amazonas'},
                {value: 'AP', viewValue: 'Amapá'}];

    if ( this.route.snapshot.paramMap.has('id') ) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.rota = 'Editar';
    } else {
      this.id = null;
      this.rota = 'Novo';
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
    if ( this.id ) {
      this.form = this.formBuilder.group({
        id: [this.tribunal.id, [Validators.required] ],
        nome: [this.tribunal.nome, [Validators.required, Validators.minLength(6)] ],
        sigla: [this.tribunal.sigla, [Validators.required, Validators.minLength(6)] ],
        logradouro: [this.tribunal.logradouro, [Validators.required, Validators.minLength(10)] ],
        bairro: [this.tribunal.bairro, [Validators.required, Validators.minLength(10)] ],
        uf: [this.tribunal.uf, [Validators.required, Validators.minLength(2)] ],
        cep: [this.tribunal.cep, [Validators.required, Validators.minLength(8)] ],
        cidade: [this.tribunal.cidade, [Validators.required, Validators.minLength(3)] ],
        telefone: [this.tribunal.telefone, [Validators.required, Validators.minLength(11)] ],
        cgc: [this.tribunal.cgc, [Validators.required, Validators.minLength(14)] ],
        numeroContrato: [this.tribunal.numeroContrato, [Validators.required, Validators.minLength(3)] ],
        descricaoContrato: [this.tribunal.descricaoContrato, [Validators.required, Validators.minLength(6)] ],
        codigoMunicipioIBGE: [this.tribunal.codigoMunicipioIBGE, [Validators.required, Validators.minLength(3)] ],
        codigoNaturezaJuridica: [this.tribunal.codigoNaturezaJuridica, [Validators.required, Validators.minLength(3)] ],
        email: [this.tribunal.email, [Validators.required, Validators.minLength(6), Validators.email] ]
       });
    } else {
     this.form = this.formBuilder.group({
      id: ['', [Validators.required] ],
      nome: ['', [Validators.required, Validators.minLength(6)] ],
      sigla: ['', [Validators.required, Validators.minLength(6)] ],
      logradouro: ['', [Validators.required, Validators.minLength(10)] ],
      bairro: ['', [Validators.required, Validators.minLength(10)] ],
      uf: ['', [Validators.required, Validators.minLength(2)] ],
      cep: ['', [Validators.required, Validators.minLength(8)] ],
      cidade: ['', [Validators.required, Validators.minLength(3)] ],
      telefone: ['', [Validators.required, Validators.minLength(11)] ],
      cgc: ['', [Validators.required, Validators.minLength(14)] ],
      numeroContrato: ['', [Validators.required, Validators.minLength(3)] ],
      descricaoContrato: ['', [Validators.required, Validators.minLength(6)] ],
      codigoMunicipioIBGE: ['', [Validators.required, Validators.minLength(3)] ],
      codigoNaturezaJuridica: ['', [Validators.required, Validators.minLength(3)] ],
      email: ['', [Validators.required, Validators.minLength(6), Validators.email] ]
    });
   }
  }


}
