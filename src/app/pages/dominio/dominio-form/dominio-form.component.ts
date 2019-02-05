import { Component, OnInit, Injector } from '@angular/core';

import { BaseResourceFormComponent } from '../../../shared/components/base-resource-form/base-resource-form.component';
import { Dominio } from '../../../domain/dominio';
import { DominioService } from '../../../service/dominio.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-dominio-form',
  templateUrl: './dominio-form.component.html',
  styleUrls: ['./dominio-form.component.css']
})
export class DominioFormComponent extends BaseResourceFormComponent<Dominio> implements OnInit {

  dominios: any[];
  optDominios: any[] = [{label: 'Informe o domínio', value: ''}];
  constructor(protected dominioService: DominioService, protected injector: Injector) {
    super(injector, new Dominio(), dominioService, Dominio.fromJson);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      nome: [this.resource.nome, [Validators.required, Validators.minLength(6)] ],
      cd: [this.resource.cd, [Validators.required, Validators.minLength(1)] ],
      descricao: [this.resource.descricao, [Validators.required, Validators.minLength(1)] ]
    });
  }

  onAfterloadResource() {
    this.populaDominio(this.resource.nome, '');
  }

  private populaDominio(nome, descricao: string) {
    // Carregando os dominios do acesso
    this.dominios = [];
    if ( ( nome !== '' ) && ( nome !== undefined ) ) {
      if ( ( descricao === '' ) && ( descricao !== undefined ) ) {
        this.dominioService.getDominioPeloNome(nome).subscribe(data => this.dominios = data);
      } else {
        this.dominioService.getDominioPeloNomeeDescricao(nome, descricao).subscribe(data => this.dominios = data);
      }
      this.populaAutoComplete();
    }
  }


   private populaAutoComplete() {
     for (let i = 1; i < this.dominios.length; i++) {
       this.optDominios = [...this.optDominios, {label: this.dominios[i].descricao, value: this.dominios[i].descricao}];
     }
   }

}
