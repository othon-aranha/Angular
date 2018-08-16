import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

import { Dominio } from '../domain/dominio';
import { DominioService } from '../service/dominio.service';

interface OptionDominio {
  name: string;
  code: string;
 }

@Component({
  selector: 'app-dominio',
  templateUrl: './dominio.component.html',
  styleUrls: ['./dominio.component.css']
})

export class DominioComponent implements OnInit {
  form: FormGroup;
  dominio: Dominio;
  dominios = [];
  optDominios: OptionDominio[];
  selectedOpt: string;


  constructor(private formBuilder: FormBuilder, private dominioService: DominioService) { }

  ngOnInit() {
    this.dominio = new Dominio();

     this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(6)] ],
      cd: ['', [Validators.required, Validators.minLength(6)] ],
      descricao: ['', [Validators.required, Validators.minLength(2)] ]
    });

    this.populaDominio();
  }

  populaDominio() {
   this.dominioService.getDominioPeloNome('DOMINIOS_ACESSO').subscribe(dados => this.dominios = dados);
   this.optDominios = [];
   for (let i = 0; i < this.dominios.length; i++) {
    this.optDominios[i].code = this.dominios[i].descricao;
    this.optDominios[i].name = this.dominios[i].descricao;
    }
  }

  GravarDominio() {
  if (this.dominio.id) {
    return this.dominioService.updateDominio(this.dominio);
  } else {
    return this.dominioService.addDominio(this.dominio);
  }
  }

  onSubmit(form): void {
    this.GravarDominio();
    // console.log(form);
    // console.log(this.dominio);
  }


}
