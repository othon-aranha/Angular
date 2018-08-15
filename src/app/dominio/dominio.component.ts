import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

import { Dominio } from '../domain/dominio';
import { DominioService } from '../service/dominio.service';

interface OptionDominio {
  nome: string;
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
  optdominios: OptionDominio[];
  selectedOpt: string;


  constructor(private formBuilder: FormBuilder, private dominioService: DominioService) { }

  ngOnInit() {
    this.dominio = new Dominio();

    this.populaDominio();

    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(6)] ],
      cd: ['', [Validators.required, Validators.minLength(6)] ],
      descricao: ['', [Validators.required, Validators.minLength(2)] ]
    });
  }

  populaDominio() {
   this.dominioService.getDominioPeloNome('DOMINIOS_ACESSO').subscribe(dados => this.dominios = dados);
   this.optdominios = [];
   for (let i = 0; i < this.dominios.length; i++) {
    this.optdominios[i].code = this.dominios[i].descricao;
    this.optdominios[i].nome = this.dominios[i].descricao;
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
