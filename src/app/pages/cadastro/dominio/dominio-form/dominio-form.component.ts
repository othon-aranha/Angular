import { Component, OnInit, Injector } from '@angular/core';

import { BaseResourceFormComponent } from '../../../../shared/components/base-resource-form/base-resource-form.component';
import { Dominio } from '../../../../domain/dominio';
import { DominioService } from '../../../../service/dominio.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-dominio-form',
  templateUrl: './dominio-form.component.html',
  styleUrls: ['./dominio-form.component.css']
})
export class DominioFormComponent extends BaseResourceFormComponent<Dominio> implements OnInit {

  checked: boolean = false;
  dominios: any[];
  optDominios: any[] = [{label: 'Informe o domínio', value: ''}];

  constructor(protected dominioService: DominioService, protected injector: Injector) {
    super(injector, new Dominio(), dominioService, Dominio.fromJson);
  }

  ngOnInit() {
    this.urlBack = '/dominio';
    // this.breadcrumbitems = [...this.breadcrumbitems, {text: 'Domínio', link: '/dominio'}];
    super.ngOnInit();
  }

  buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(6)] ],
      cd: [null, [Validators.required, Validators.minLength(1)] ],
      descricao: [null, [Validators.required, Validators.minLength(1)] ]
    });
  }


  onAfterloadResource() {
    if ( this.currentAction === 'edit' ) {
      this.resourceForm.get('id').setValue(this.id);
      this.mudarChecked(true);
      if ( this.resource.descricao !== 'DOMINIOS_ACESSO'  )  {
        this.populaDominio('DOMINIOS_ACESSO', '');
       }
    }
  }

  mudarChecked(checked: boolean) {
    this.checked = checked;
    if ( ( this.checked ) && ( this.currentAction === 'new' ) ) {
      this.populaDominio('DOMINIOS_ACESSO', '');
    }
  }

  private populaDominio(nome, descricao: string) {
    // Carregando os dominios do acesso
    this.dominios = [];
    if ( ( nome !== '' ) && ( nome !== undefined ) ) {
      if ( ( descricao === '' ) && ( descricao !== undefined ) ) {
        this.dominioService.getDominioPeloNome(nome)
        .subscribe(
          (resource) => {
            this.dominios = resource;
            this.populaAutoComplete();
          },
          (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
        );
      } else {
        this.dominioService.getDominioPeloNomeeDescricao(nome, descricao)
        .subscribe(
          (resource) => {
            this.dominios = resource;
            this.populaAutoComplete();
          },
          (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
        );
      }
    }
  }


   private populaAutoComplete() {
    this.optDominios = [{label: 'Informe o domínio', value: ''}];
    for (let i = 0; i < this.dominios.length; i++) {
       this.optDominios = [...this.optDominios, {label: this.dominios[i].descricao, value: this.dominios[i].descricao}];
     }
   }

}
