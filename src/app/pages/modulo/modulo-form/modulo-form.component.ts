import { ModuloService } from '../../../service/modulo.service';
import { Component, OnInit, Injector } from '@angular/core';

import { Validators } from '@angular/forms';

import { BaseResourceFormComponent } from '../../../shared/components/base-resource-form/base-resource-form.component';
import { Modulo } from '../../../domain/modulo';


@Component({
  selector: 'app-modulo-form',
  templateUrl: './modulo-form.component.html',
  styleUrls: ['./modulo-form.component.css']
})
export class ModuloFormComponent extends BaseResourceFormComponent<Modulo> implements OnInit {

  constructor(protected moduloService: ModuloService, protected injector: Injector) {
    super(injector, new Modulo(), moduloService, Modulo.fromJson);
  }


  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id:   [this.resource.id, [Validators.required, Validators.minLength(1)] ],
      sigla: [this.resource.sigla, [Validators.required, Validators.minLength(3)] ],
      alias: [this.resource.alias, [Validators.required, Validators.minLength(1)] ],
      esquema: [this.resource.esquema, [Validators.required, Validators.minLength(3)] ],
      versao: [this.resource.versao, [Validators.required, Validators.minLength(7)] ],
      mensagemCompartilhada: [this.resource.mensagemCompartilhada,
                            [Validators.required, Validators.minLength(1), Validators.maxLength(1)] ],
      controlaAcesso: [this.resource.controlaAcesso, [Validators.required, Validators.minLength(1), Validators.maxLength(1)] ]
    });
  }

  ngOnInit() {
    super.ngOnInit();
  }

  protected creationPageTitle(): string {
    return 'Cadastro de Novo Módulo';
  }

  protected editionPageTitle(): string {
    const categoryName = this.resource.id || '';
    return 'Editando Módulo: ' + categoryName;
  }

}
