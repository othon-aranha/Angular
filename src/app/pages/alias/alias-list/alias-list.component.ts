import { MaquinaServidora } from './../../../domain/maquina-servidora';
import { AliasService } from './../../../service/alias.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem, Message } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alias-list',
  templateUrl: './alias-list.component.html',
  styleUrls: ['./alias-list.component.css']
})
export class AliasListComponent implements OnInit {
  alias: Array<MaquinaServidora>  = [];
  selectedAlias: MaquinaServidora;
  cols: any[];

  items: MenuItem[];
  msgs: Message[];

  constructor(private aliasService: AliasService,
    private router: Router) { }

  ngOnInit() {
   // Consultas Alias //
   this.consultarTodosAlias();

   // Colunas da Grid //
   this.cols = [
    {header: 'Alias', field: 'id', classe: 'ui-p-4'},
    {header: 'Descrição', field: 'descricao', classe: 'ui-p-4'},
    {header: 'Usuário', field: 'usuario', classe: 'ui-p-2'}
   ];

     // Itens do popup menu //
  this.items = [
    { label: 'Visualizar', icon: 'fa-search', command: (event) => this.viewAlias(this.selectedAlias) },
    { label: 'Excluir', icon: 'fa-close', command: (event) => this.viewAlias(this.selectedAlias) }
  ];

  }

  consultarTodosAlias() {
    this.aliasService.listarServidoresdoTribunal(1).subscribe(dados => this.alias = dados);
  }

  onRowSelect(event) {
    this.selectedAlias = this.cloneAlias(event.data);
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
    this.router.navigate(['/alias/', alias.id.alias, 'edit']);
  }

}
