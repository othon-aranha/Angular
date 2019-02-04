import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceFormComponent } from '../../../shared/components/base-resource-form/base-resource-form.component';
import { Tribunal } from '../../../domain/tribunal';
import { TribunalService } from '../../../service/tribunal.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-tribunal-form',
  templateUrl: './tribunal-form.component.html',
  styleUrls: ['./tribunal-form.component.css']
})
export class TribunalFormComponent extends BaseResourceFormComponent<Tribunal> implements OnInit {
  id: string;
  ufs = [];
  editing: boolean = false;

  constructor(protected tribunalService: TribunalService, protected injector: Injector) {
    super(injector, new Tribunal(), tribunalService, Tribunal.fromJson);
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [this.id, [Validators.required] ],
      nome: [this.resource.nome, [Validators.required, Validators.minLength(6)] ],
      sigla: [this.resource.sigla, [Validators.required, Validators.minLength(3)] ],
      logradouro: [this.resource.logradouro, [Validators.required, Validators.minLength(10)] ],
      bairro: [this.resource.bairro, [Validators.required, Validators.minLength(3)] ],
      uf: [this.resource.uf, [Validators.required, Validators.minLength(2), Validators.maxLength(2)] ],
      cep: [this.resource.cep, [Validators.required, Validators.minLength(8)] ],
      cidade: [this.resource.cidade, [Validators.required, Validators.minLength(3)] ],
      telefone: [this.resource.telefone, [Validators.required, Validators.minLength(11)] ],
      cgc: [this.resource.cgc, [Validators.required, Validators.minLength(14)] ],
      numeroContrato: [this.resource.numeroContrato, [Validators.required, Validators.minLength(3)] ],
      descricaoContrato: [this.resource.descricaoContrato, [Validators.required, Validators.minLength(6)] ],
      codigoMunicipioIBGE: [this.resource.codigoMunicipioIBGE, [Validators.required, Validators.minLength(3)] ],
      codigoNaturezaJuridica: [this.resource.codigoNaturezaJuridica, [] ],
      email: [this.resource.email, [Validators.required, Validators.minLength(6), Validators.email] ]
     });
  }

  ngOnInit() {

    if ( this.route.snapshot.paramMap.has('id') ) {
      this.id = this.route.snapshot.paramMap.get('id');
    } else {
      this.id = null;
    }

    this.ufs = [
    {value: 'AC', viewValue: 'Acre'},
    {value: 'AL', viewValue: 'Alagoas'},
    {value: 'AM', viewValue: 'Amazonas'},
    {value: 'AP', viewValue: 'Amapá'},
    {value: 'BA', viewValue: 'Bahia'},
    {value: 'CE', viewValue: 'Ceará'},
    {value: 'DF', viewValue: 'Distrito Federal'},
    {value: 'ES', viewValue: 'Espírito Santo'},
    {value: 'DF', viewValue: 'Distrito Federal'},
    {value: 'GO', viewValue: 'Goiás'},
    {value: 'MA', viewValue: 'Maranhão'},
    {value: 'MG', viewValue: 'Minas Gerais'},
    {value: 'MS', viewValue: 'Mato Grosso do Sul'},
    {value: 'MT', viewValue: 'Mato Grosso'},
    {value: 'PA', viewValue: 'Pará'}
    ];
    super.ngOnInit();
    this.resourceForm.controls['id'].patchValue(+this.id);
    this.editing = ( this.resource.id !== undefined );
  }

}
