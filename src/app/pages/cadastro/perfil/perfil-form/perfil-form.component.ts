import { Component, OnInit, Injector } from '@angular/core';
import { Perfil } from '../../../../domain/perfil';
import { BaseResourceFormComponent } from '../../../../shared/components/base-resource-form/base-resource-form.component';
import { PerfilService } from '../../../../service/perfil.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil-form',
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.css']
})
export class PerfilFormComponent extends BaseResourceFormComponent<Perfil> implements OnInit {

  constructor(protected perfilService: PerfilService, protected injector: Injector) {
    super(injector, new Perfil(), perfilService, Perfil.fromJson);
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: new FormControl(this.id, [Validators.required, Validators.minLength(1)] ),
      nome: new FormControl(this.resource.nome, [Validators.required, Validators.minLength(6)] ),
      modulo: new FormControl(this.resource.modulo, [Validators.required] ),
    });
  }

  ngOnInit() {
    super.ngOnInit();
  }

  onAfterloadResource() {

  }

}
