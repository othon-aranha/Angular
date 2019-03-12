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
  gridrows: Array<Grupo>  = [];
  selectedrow: Grupo;

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

  cloneRow(m: Grupo): Grupo {
    const grupo = new Grupo();
    // tslint:disable-next-line:forin
    for (const prop in m) {
        grupo[prop] = m[prop];
    }
    return grupo;
   }

  viewGrupo(grupo: Grupo) {
    this.router.navigate(['/grupo/', grupo.id, 'edit']);
  }

  newGrupo() {
    this.router.navigate(['/grupo/', 'new']);
  }

  deleteGrupo(grupo: Grupo) {
    let index = -1;
    for (let i = 0; i < this.gridrows.length; i++) {
      if ( this.gridrows[i].id === grupo.id ) {
          index = i;
          break;
      }
    }
    this.grupoService.delete(grupo.id);
    this.gridrows.splice(index, 1);

    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Grupo excluído', detail: grupo.id + ' - ' + grupo.nome });
  }

}
