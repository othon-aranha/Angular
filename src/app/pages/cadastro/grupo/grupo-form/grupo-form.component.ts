import { AreaService } from './../../../../service/area.service';
import { FormControl, Validators } from '@angular/forms';
import { GrupoService } from './../../../../service/grupo.service';
import { Grupo } from './../../../../domain/grupo';
import { Component, OnInit, Injector } from '@angular/core';
import { BaseResourceFormComponent } from '../../../../shared/components/base-resource-form/base-resource-form.component';
import { Area } from '../../../../domain/area';
import { SelectItem } from 'primeng/api';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-grupo-form',
  templateUrl: './grupo-form.component.html',
  styleUrls: ['./grupo-form.component.css']
})
export class GrupoFormComponent extends BaseResourceFormComponent<Grupo> implements OnInit {
  areasList: any[]; // Lista filtrada
  areas: Area[] = [];

  constructor(protected grupoService: GrupoService, protected injector: Injector, private areaService: AreaService) {
    super(injector, new Grupo(), grupoService, Grupo.fromJson);
  }


  ngOnInit() {
    super.ngOnInit();
    this.carregaAreas();
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

  carregaAreas() {
    this.areas = [];
    this.areaService.getAll()
    .subscribe(
      (resource) => {
        this.areas = resource;
        // areasList.forEach((el) => { this.areas = [...this.areas, { value: el.id, label: el.sigla + ' - ' + el.nome}]; });
      },
      (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
    );
  }


  buscaAutoComplete(termo: string) {
    this.areasList = [];
    for (let i = 0; i < this.areas.length; i++) {
      const area = this.areas[i];
      if (area.sigla.toLowerCase().indexOf(termo.toLowerCase()) === 0) {
          this.areasList.push(area.sigla);
      }
    }
  }

}
