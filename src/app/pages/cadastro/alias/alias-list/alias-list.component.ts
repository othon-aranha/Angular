import { MaquinaServidora } from './../../../../domain/maquina-servidora';
import { AliasService } from './../../../../service/alias.service';
import { Component, OnInit, Injector } from '@angular/core';
import { MenuItem, Message } from 'primeng/api';
import { BaseListFormComponent } from '../../../../shared/components/base-list-form/base-list-form.component';

@Component({
  selector: 'app-alias-list',
  templateUrl: './alias-list.component.html',
  styleUrls: ['./alias-list.component.css']
})
export class AliasListComponent extends BaseListFormComponent<MaquinaServidora> implements OnInit {
  gridrows: Array<MaquinaServidora>  = [];
  selectedrow: MaquinaServidora;
  cols: any[];
  idTribunal: number;

  items: MenuItem[];
  msgs: Message[];

  constructor (protected aliasService: AliasService, protected injector: Injector) {
    super(injector, new MaquinaServidora(), aliasService, MaquinaServidora.fromJson);
  }

  ngOnInit() {
   this.idTribunal = 1;
   // Consultas Alias //
   this.consultarTodosAlias();

   // Colunas da Grid //
   this.cols = [
    {header: 'Id', field: 'id.tribunal.cdTrib', classe: 'ui-p-4'},
    {header: 'Alias', field: 'id.alias', classe: 'ui-p-4'},
    {header: 'Descrição', field: 'descricao', classe: 'ui-p-4'},
    {header: 'Usuário', field: 'usuario', classe: 'ui-p-2'}
   ];

     // Itens do popup menu //
  this.items = [
    { label: 'Editar', icon: 'fas fa-edit', command: (event) => this.viewAlias(this.selectedrow) },
    { label: 'Novo', icon: 'fas fa-plus-square', command: (event) => this.newAlias(this.selectedrow) },
    { label: 'Excluir', icon: 'fas fa-trash-alt', command: (event) => this.deleteAlias(this.selectedrow) }
  ];

  }

  consultarTodosAlias() {
    this.aliasService.listarMaquinasServidorasdoTribunal(this.idTribunal).subscribe(dados => this.gridrows = dados);
  }

  cloneRow(m: MaquinaServidora): MaquinaServidora {
    const alias = new MaquinaServidora();
    // tslint:disable-next-line:forin
    for (const prop in m) {
        alias[prop] = m[prop];
    }
    return alias;
   }

   viewAlias(alias: MaquinaServidora) {
    this.router.navigate(['alias', alias.id.alias, 'tribunal', alias.id.tribunal.id , 'edit']);
  }

  newAlias(alias: MaquinaServidora) {
    this.router.navigate(['alias', 'new']);
  }


  deleteAlias(alias: MaquinaServidora) {
    this.router.navigate(['alias', 'new']);
  }
}
