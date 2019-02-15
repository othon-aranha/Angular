import { Component, OnInit, Injector } from '@angular/core';
import { BaseListFormComponent } from '../../../shared/components/base-list-form/base-list-form.component';
import { AreaService } from '../../../service/area.service';
import { Area } from '../../../domain/area';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent extends BaseListFormComponent<Area> implements OnInit {
  constructor(protected areaService: AreaService, protected injector: Injector) {
    super(injector, new Area(), areaService, Area.fromJson);
  }

  ngOnInit() {

    super.ngOnInit();

    // Colunas da Grid //
    this.cols = [
      {header: 'Id', field: 'id', classe: 'ui'},
      {header: 'Nome', field: 'nome', classe: 'ui-p-8'},
      {header: 'Email', field: 'email', classe: 'ui-p-1'},
      {header: 'Status', field: 'status', classe: 'ui-p-1'},
      {header: 'Zona', field: 'zona', classe: 'ui-p-2'},
      {header: 'Número da Zona', field: 'numeroZona', classe: 'ui-p-2'},
      {header: 'Tipo', field: 'tipo', classe: 'ui-p-2'}
  ];
  }

  viewRegister(tipo: Area) {
    this.router.navigate(['area', this.id, '/edit']);
  
  }

  deleteRegister(tipo: Area) {
   //  this.router.navigate
  }

}
