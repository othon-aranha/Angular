import { Component, OnInit, Injector } from '@angular/core';
import { Grupo } from '../../../../domain/grupo';
import { BaseResourceFormComponent } from '../../../../shared/components/base-resource-form/base-resource-form.component';
import { GrupoService } from '../../../../service/grupo.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-grupo-form',
  templateUrl: './grupo-form.component.html',
  styleUrls: ['./grupo-form.component.css']
})
export class GrupoFormComponent extends BaseResourceFormComponent<Grupo> implements OnInit {


  constructor(protected grupoService: GrupoService, protected injector: Injector) {
    super(injector, new Grupo(), grupoService, Grupo.fromJson);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [this.id],
      nome: [this.resource.nome, [Validators.required, Validators.minLength(3)] ],
      area: [this.resource.area, [Validators.required] ]
    });
  }

  onAfterloadResource() {
    //
  }

}
