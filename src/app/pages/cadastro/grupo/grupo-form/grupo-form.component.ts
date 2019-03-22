import { AreaService } from './../../../../service/area.service';
import { FormControl, Validators } from '@angular/forms';
import { GrupoService } from './../../../../service/grupo.service';
import { Grupo } from './../../../../domain/grupo';
import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceFormComponent } from '../../../../shared/components/base-resource-form/base-resource-form.component';
import { Area } from '../../../../domain/area';

@Component({
  selector: 'app-grupo-form',
  templateUrl: './grupo-form.component.html',
  styleUrls: ['./grupo-form.component.css']
})
export class GrupoFormComponent extends BaseResourceFormComponent<Grupo> implements OnInit {
  areas: Array<string> = [];
  constructor(protected grupoService: GrupoService, protected injector: Injector, private areaService: AreaService) {
    super(injector, new Grupo(), grupoService, Grupo.fromJson);
  }


  ngOnInit() {
    super.ngOnInit();
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id:   new FormControl( '', [Validators.required, Validators.minLength(1)] ),
      nome: new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      area: new FormControl( '', [Validators.required] )
    });
  }

  onAfterloadResource() {

  }

  buscaAutoComplete(event) {
    const termo = event.query;
    this.areas = [];
    let manutencoes: Array<Area> = [];
    this.areaService.listarUnidadesIniciadasCom(event.query)
    .subscribe(
      (resource) => {
        manutencoes = resource;
        for (let i = 0; i < manutencoes.length; i++) {
          this.areas = [...this.areas, manutencoes[i].sigla];
        }
      },
      (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
    );
  }

}