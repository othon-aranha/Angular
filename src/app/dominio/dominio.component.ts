import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


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
  id: string;
  params: ParamMap;
  form: FormGroup;
  dominio: Dominio;
  dominios = [];
  optDominios: OptionDominio[];
  selectedOpt: string;


  constructor(private formBuilder: FormBuilder,
              private dominioService: DominioService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if ( this.route.snapshot.paramMap.has('id') ) {
      this.id = this.route.snapshot.paramMap.get('id');
    } else {
      this.id = null;
    }

    this.dominio = new Dominio();

    if ( this.id ) {
    this.recuperarDominio(this.id);
    }

    this.populaDominio();

    if ( this.dominio ) {
      this.form = this.formBuilder.group({
        nome: [this.dominio.nome, [Validators.required, Validators.minLength(6)] ],
        cd: [this.dominio.cd, [Validators.required, Validators.minLength(6)] ],
        descricao: [this.dominio.descricao, [Validators.required, Validators.minLength(2)] ]
      });
    } else {
     this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(6)] ],
      cd: ['', [Validators.required, Validators.minLength(6)] ],
      descricao: ['', [Validators.required, Validators.minLength(2)] ]
    }); }

  }

  populaDominio() {
   // Carregando os dominios do acesso
   this.dominioService.getDominioPeloNome('DOMINIOS_ACESSO').subscribe(data => this.dominios = data);
   this.optDominios = [];
   this.optDominios.push({name: 'Selecione um Domínio', code: ''});
   for (let i = 0; i < this.dominios.length; i++) {
    this.optDominios.push({name: this.optDominios[i].name, code: this.dominios[i].descricao});
    }
  }

  recuperarDominio(id: string) {
    this.dominioService.getDominio(id).subscribe(dados => this.dominio = dados);
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
