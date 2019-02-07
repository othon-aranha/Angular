import { Validators } from '@angular/forms';
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
    this.aliasService.getByCompositeId(this.id, this.alias).subscribe(dados => this.resource = dados);
    this.buildResourceForm();
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id:   [this.resource.id, [Validators.required, Validators.minLength(1)] ],
      alias: [this.resource.id.alias, [Validators.required, Validators.minLength(1)] ],
      descricao: [this.resource.descricao, [Validators.required, Validators.minLength(3)] ],
      usuario: [this.resource.usuario, [Validators.required, Validators.minLength(7)] ],
      senha: [this.resource.senha, [Validators.required, Validators.minLength(3)]],
      conexao: [this.resource.conexao,
                             [Validators.required, Validators.minLength(1), Validators.maxLength(1)] ]
    });
  }

  protected onAfterloadResource() {

  }

}
