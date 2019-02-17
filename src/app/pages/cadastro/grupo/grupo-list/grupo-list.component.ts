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
    this.consultarTodosAlias();

    // Colunas da Grid //
    this.cols = [
     {header: 'Alias', field: 'alias', classe: 'ui-p-4'},
     {header: 'Descrição', field: 'descricao', classe: 'ui-p-4'},
     {header: 'Usuário', field: 'usuario', classe: 'ui-p-2'}
    ];

      // Itens do popup menu //
   this.items = [
     { label: 'Visualizar', icon: 'fa-search', command: (event) => this.viewGrupo(this.selectedrow) },
     { label: 'Excluir', icon: 'fa-close', command: (event) => this.deleteGrupo(this.selectedrow) }
   ];

   }

   consultarTodosAlias() {
     // this.grupoService.listarServidoresdoTribunal(1).subscribe(dados => this.gridrows = dados);
   }

   onRowSelect(event) {
     // this.selectedrow = this.cloneGrupo(event.data);
   }

   viewGrupo(grupo: Grupo) {
     //
   }

   deleteGrupo(grupo: Grupo) {
    //
   }
}
