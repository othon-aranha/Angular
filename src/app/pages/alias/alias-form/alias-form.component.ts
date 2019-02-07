import { Validators, FormBuilder } from '@angular/forms';
import { AliasService } from './../../../service/alias.service';
import { MaquinaServidora } from './../../../domain/maquina-servidora';
import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceFormComponent } from '../../../shared/components/base-resource-form/base-resource-form.component';

@Component({
  selector: 'app-alias-form',
  templateUrl: './alias-form.component.html',
  styleUrls: ['./alias-form.component.css']
})
export class AliasFormComponent extends BaseResourceFormComponent<MaquinaServidora> implements OnInit {

  constructor(protected aliasService: AliasService, protected injector: Injector) {
    super(injector, new MaquinaServidora(), aliasService, MaquinaServidora.fromJson);
  }

  ngOnInit() {
    super.getParamId();
    this.buildResourceForm();
    this.aliasService.getByCompositeId(this.id, this.alias).subscribe(
      (resource) => {
        this.resource =  resource;
        this.resourceForm.patchValue();
        this.onAfterloadResource();
      },
      (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
    );
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id:   [null, [Validators.required, Validators.minLength(1)] ],
      alias: [null, [Validators.required, Validators.minLength(1)] ],
      descricao: [null, [Validators.required, Validators.minLength(3)] ],
      usuario: [null, [Validators.required, Validators.minLength(7)] ],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      conexao: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(1)] ]
    });
  }

  protected onAfterloadResource() {

  }

}
