import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { AliasService } from './../../../../service/alias.service';
import { MaquinaServidora } from './../../../../domain/maquina-servidora';
import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceFormComponent } from '../../../../shared/components/base-resource-form/base-resource-form.component';
import { Tribunal } from '../../../../domain/tribunal';
import { TribunalService } from '../../../../service/tribunal.service';


@Component({
  selector: 'app-alias-form',
  templateUrl: './alias-form.component.html',
  styleUrls: ['./alias-form.component.css']
})
export class AliasFormComponent extends BaseResourceFormComponent<MaquinaServidora> implements OnInit {

  tribunalLocal: Tribunal;

  constructor(protected aliasService: AliasService, protected injector: Injector, private tribunalService: TribunalService) {
    super(injector, new MaquinaServidora(), aliasService, MaquinaServidora.fromJson);
  }

  ngOnInit() {
    super.ngOnInit();
    this.resourceForm.get('id').setValue(this.id);
    this.tribunalService.recuperarTribunalLocal().subscribe(
      (data) => {
        this.tribunalLocal = data;
        this.resourceForm.get('tribunal').setValue(this.tribunalLocal);
       });
    /*
    this.buildResourceForm();
    super.getParamId();
    // this.resourceForm.patchValue({id: this.id, alias: this.alias});
    this.aliasService.getByCompositeId(this.id, this.alias).subscribe(
      (resource) => {
        this.resource = resource;
        this.resourceForm.patchValue({
          id: {cdTrib: this.id, alias: this.alias},
          descricao: this.resource.descricao,
          usuario: this.resource.usuario, senha: this.resource.senha,
          conexao: this.resource.conexao});
          // console.log(this.resourceForm.value);
        this.resource.conexao =  resource.conexao;
        this.resource.descricao =  resource.descricao;
        this.resource.usuario =  resource.usuario;
        this.resource.senha =  resource.senha;
      },
      (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
    );
    this.onAfterloadResource();
    // console.log(this.resourceForm.value);*/
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id:        new FormControl('', [Validators.required, Validators.minLength(1)] ),
      tribunal:  new FormControl('', Validators.required),
      alias:     new FormControl('', [Validators.required, Validators.minLength(1)] ),
      descricao: new FormControl('', [Validators.required, Validators.minLength(3)] ),
      usuario:   new FormControl('', [Validators.required, Validators.minLength(6)] ),
      senha:     new FormControl('', [Validators.required, Validators.minLength(3)] ),
      conexao:   new FormControl('', [Validators.required, Validators.minLength(1)] )
    });
  }

  protected onAfterloadResource() {

  }

}
