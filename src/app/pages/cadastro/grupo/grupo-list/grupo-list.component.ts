import { Component, OnInit, Injector } from '@angular/core';
import { Grupo } from '../../../../domain/grupo';
import { BaseListFormComponent } from '../../../../shared/components/base-list-form/base-list-form.component';
import { MenuItem, Message } from 'primeng/api';
import { GrupoService } from '../../../../service/grupo.service';

@Component({
  selector: 'app-grupo-list',
  templateUrl: './grupo-list.component.html',
  styleUrls: ['./grupo-list.component.css']
})
export class GrupoListComponent extends BaseListFormComponent<Grupo> implements OnInit {

  gridrows: Array<Grupo>  = [];
  selectedrow: Grupo;
  cols: any[];

  items: MenuItem[];
  msgs: Message[];

  constructor (protected grupoService: GrupoService, protected injector: Injector) {
    super(injector, new Grupo(), grupoService, Grupo.fromJson);
  }

  ngOnInit() {
    // Consultas Alias //
    super.ngOnInit();

    // Colunas da Grid //
    this.cols = [
     {header: 'Id', field: 'id', classe: 'ui-p-4'},
     {header: 'Grupo', field: 'nome', classe: 'ui-p-4'},
     {header: 'Área', field: 'area.sigla', classe: 'ui-p-2'}
    ];

      // Itens do popup menu //
   this.items = [
     { label: 'Visualizar', icon: 'fa-search', command: (event) => this.viewGrupo(this.selectedrow) },
     { label: 'Novo', icon: 'fa-search', command: (event) => this.newGrupo() },
     { label: 'Excluir', icon: 'fa-close', command: (event) => this.deleteGrupo(this.selectedrow) }
   ];

   }

   onRowSelect(event) {
     // this.selectedrow = this.cloneGrupo(event.data);
   }

   viewGrupo(grupo: Grupo) {
     //
   }

   newGrupo() {
    this.router.navigate(['/grupo/new']);
   }

   deleteGrupo(grupo: Grupo) {
    //
   }
}
