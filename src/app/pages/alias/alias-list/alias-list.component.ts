import { MaquinaServidora } from './../../../domain/maquina-servidora';
import { AliasService } from './../../../service/alias.service';
import { Component, OnInit, Injector } from '@angular/core';
import { MenuItem, Message } from 'primeng/api';
import { Router } from '@angular/router';
import { BaseListFormComponent } from '../../../shared/components/base-list-form/base-list-form.component';

@Component({
  selector: 'app-alias-list',
  templateUrl: './alias-list.component.html',
  styleUrls: ['./alias-list.component.css']
})
export class AliasListComponent extends BaseListFormComponent<MaquinaServidora> implements OnInit {
  gridrows: Array<MaquinaServidora>  = [];
  selectedrow: MaquinaServidora;
  cols: any[];

  items: MenuItem[];
  msgs: Message[];

  constructor (protected aliasService: AliasService, protected injector: Injector) {
    super(injector, new MaquinaServidora(), aliasService, MaquinaServidora.fromJson);
  }

  ngOnInit() {
   // Consultas Alias //
   this.consultarTodosAlias();

   // Colunas da Grid //
   this.cols = [
    {header: 'Alias', field: 'id.alias', classe: 'ui-p-4'},
    {header: 'Descrição', field: 'descricao', classe: 'ui-p-4'},
    {header: 'Usuário', field: 'usuario', classe: 'ui-p-2'}
   ];

     // Itens do popup menu //
  this.items = [
    { label: 'Visualizar', icon: 'fa-search', command: (event) => this.viewAlias(this.selectedrow) },
    { label: 'Excluir', icon: 'fa-close', command: (event) => this.viewAlias(this.selectedrow) }
  ];

  }

  consultarTodosAlias() {
    this.aliasService.listarServidoresdoTribunal(1).subscribe(dados => this.gridrows = dados);
  }

  onRowSelect(event) {
    this.selectedrow = this.cloneAlias(event.data);
  }



  cloneAlias(m: MaquinaServidora): MaquinaServidora {
    const alias = new MaquinaServidora();
    // tslint:disable-next-line:forin
    for (const prop in m) {
        alias[prop] = m[prop];
    }
    return alias;
   }

   viewAlias(alias: MaquinaServidora) {
    this.router.navigate(['/alias/', alias.id.alias, '/cdTrib/', alias.id.cdTrib, 'edit']);
  }

}
