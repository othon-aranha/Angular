
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
// import { switchMap } from 'rxjs/operators';

// import { ButtonModule, SelectItem } from 'primeng/primeng';
// import { ConfirmDialogModule } from 'primeng/confirmdialog';


import { ConfirmationService, Message } from 'primeng/api';



import { Dominio } from '../../domain/dominio';
import { DominioService } from '../../service/dominio.service';

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
  dominios: Dominio[];
  optDominios = [];
  text: string;
  msgs: Message[] = [];
  rota: string;


  constructor(private formBuilder: FormBuilder,
              private dominioService: DominioService,
              private route: ActivatedRoute,
              private confirmationService: ConfirmationService) {
              this.populaDominio('DOMINIOS_ACESSO', '');
  }

  ngOnInit() {
    if ( this.route.snapshot.paramMap.has('id') ) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.rota = 'Editar';
    } else {
      this.id = null;
      this.rota = 'Novo';
    }

    this.dominio = new Dominio();

    if ( this.id ) {
      this.recuperarDominio(this.id);
      // this.form.patchValue(this.dominio);
    }

    this.inicializaForm();
  }

  get f() { return this.form.controls; }

  inicializaForm() {
     this.form = this.formBuilder.group({
      nome: [this.dominio.nome, [Validators.required, Validators.minLength(6)] ],
      cd: [this.dominio.cd, [Validators.required, Validators.minLength(1)] ],
      descricao: [this.dominio.descricao, [Validators.required, Validators.minLength(1)] ]
    });
  }


  populaDominio(nome, descricao: string) {
   // Carregando os dominios do acesso
   this.dominios = [];
   if ( descricao === '' ) {
    this.dominioService.getDominioPeloNome(nome).subscribe(data => {
      this.dominios = data;
    });
   } else {
    this.dominioService.getDominioPeloNomeeDescricao(nome, descricao).subscribe(data => {
      this.dominios = data;
    });
   }
  this.populaAutoComplete();
  }


  populaAutoComplete() {
    // this.optDominios.push({label: 'Informe o domínio', value: -1});
    this.optDominios = [...this.optDominios, {label: 'Informe o domínio', value: -1}];
    for (let i = 1; i < this.dominios.length; i++) {
      this.optDominios = [...this.optDominios, {label: this.dominios[i].descricao, value: this.dominios[i].descricao}];
      // this.optDominios.push({label: this.dominios[i].descricao, value: this.dominios[i].descricao});
    }
  }

  recuperarDominio(id: string) {
    this.dominioService.getDominio(id).subscribe(dados => this.dominio = dados);
  }

  GravarDominio() {
    const dominio = Object.assign(this.dominio, this.form.value);
    if ( this.id ) {
      return this.dominioService.updateDominio(dominio);
    } else {
      return this.dominioService.addDominio(dominio);
    }
  }


  onSubmit(form): void {
    let confirmation = null;
    confirmation = this.confirmationService.confirm({message: 'Confirma a operação?' ,
    header: 'Confirmação' ,
    icon: 'pi pi-exclamation-triangle' ,
    accept: () => {
          this.GravarDominio();
          this.form.reset();
          this.msgs = [{severity: 'info', summary: 'Confirmado', detail: 'You have accepted'}];
      }
    });

    /*
    if ( this.msgs[0].summary === 'Confirmado' ) {
      this.GravarDominio();
    }
    */
    // this.GravarDominio();
    // console.log(form);
    // console.log(this.dominio);
  }


}
