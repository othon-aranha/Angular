import { FormControl, Validators } from '@angular/forms';
import { GrupoService } from './../../../../service/grupo.service';
import { Grupo } from './../../../../domain/grupo';
import { Component, OnInit, Injector } from '@angular/core';
import { Area } from '../../../../domain/area';
import { BaseResourceFormComponent } from '../../../../shared/components/base-resource-form/base-resource-form.component';
import { AreaService } from '../../../../service/area.service';

@Component({
  selector: 'app-area-form',
  templateUrl: './area-form.component.html',
  styleUrls: ['./area-form.component.css']
})
export class AreaFormComponent extends BaseResourceFormComponent<Area> implements OnInit {

  grupos: Array<Grupo>;
  constructor(protected areaService: AreaService, protected injector: Injector, private grupoService: GrupoService) {
    super(injector, new Area(), areaService, Area.fromJson);
  }


  ngOnInit() {
    this.urlBack = '/area';
    super.ngOnInit();
  }

  buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id:    new FormControl( '', [Validators.required, Validators.minLength(1)] ),
      sigla: new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      nome:  new FormControl( '', [Validators.required, Validators.minLength(1)] )
    });
    // this.formBuilder.control('tipoModulo').registerOnChange(th

  }

  onAfterloadResource() {
    this.grupoService.listarGruposporSiglaUnidade(this.resource.sigla).subscribe(
      data => this.grupos = data
    );
  }

}
