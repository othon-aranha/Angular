import { Grupo } from './../../../../domain/grupo';
import { Component, OnInit, Injector } from '@angular/core';
import { BaseListFormComponent } from '../../../../shared/components/base-list-form/base-list-form.component';
import { GrupoService } from '../../../../service/grupo.service';

@Component({
  selector: 'app-grupo-list',
  templateUrl: './grupo-list.component.html',
  styleUrls: ['./grupo-list.component.css']
})
export class GrupoListComponent  extends BaseListFormComponent<Grupo> implements OnInit {

   constructor(protected grupoService: GrupoService, protected injector: Injector ) {
      super(injector, new Grupo(), grupoService, Grupo.fromJson);
   }

  ngOnInit() {
    super.ngOnInit();
        // Colunas da Grid //
    this.cols = [
          {header: 'Id', field: 'id', classe: 'ui'},
          {header: 'Grupo', field: 'nome', classe: 'ui-p-2'}
    ];

  // Itens do popup menu //
  this.items = [
    { label: 'Editar', icon: 'fas fa-edit', command: (event) => this.viewGrupo(this.selectedrow) },
    { label: 'Novo', icon: 'fas fa-plus-square', command: (event) => this.newGrupo() },
    { label: 'Excluir', icon: 'fas fa-trash-alt', command: (event) => this.deleteGrupo(this.selectedrow) }
  ];
  }

  viewGrupo(grupo: Grupo) {
  //
  }

  newGrupo() {

  }

  deleteGrupo(grupo: Grupo) {
  //
  }

}
