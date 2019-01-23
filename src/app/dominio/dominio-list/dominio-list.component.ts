import { MenuItem, Message } from 'primeng/api';
import { Component, OnInit } from '@angular/core';


import { Dominio } from '../../domain/dominio';
import { DominioService } from '../../service/dominio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dominio-list',
  templateUrl: './dominio-list.component.html',
  styleUrls: ['./dominio-list.component.css']
})
export class DominioListComponent implements OnInit {
  dominios = [];
  rota: string;
  selecteddominio: any;
  cols: any[];
  items: MenuItem[];
  msgs: Message[];

  constructor(private dominioService: DominioService, private router: Router) { }

  ngOnInit() {
  // Colunas da Grid //
  this.cols = [
      {header: 'Id', field: 'id', classe: 'ui'},
      {header: 'Nome', field: 'nome', classe: 'ui-p-2'},
      {header: 'Código', field: 'cd', classe: 'ui-p-2'},
      {header: 'Descrição', field: 'descricao', classe: 'ui-p-2'}];

  this.rota = 'Domínio';

  // Itens do popup menu //
  this.items = [
    { label: 'Editar', icon: 'fa-search', command: (event) => this.viewDominio(this.selecteddominio) },
    { label: 'Novo', icon: 'fa-search', command: (event) => this.newDominio() },
    { label: 'Excluir', icon: 'fa-close', command: (event) => this.deleteDominio(this.selecteddominio) }
  ];

  this.consultarDominios();
  }

  viewDominio(dominio: Dominio) {
    this.router.navigate(['/dominio/', dominio.id]);
  }

  newDominio() {
    this.router.navigate(['/dominio/new']);
  }

  deleteDominio(dominio: Dominio) {
    let index = -1;
    for (let i = 0; i < this.dominios.length; i++) {
      if ( this.dominios[i].id === dominio.id ) {
          index = i;
          break;
      }
    }
    this.dominioService.deleteDominio(dominio.id);
    this.dominios.splice(index, 1);

    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Domínio excluído', detail: dominio.id + ' - ' + dominio.cd });
  }

  consultarDominios() {
    this.dominioService.getDominios().subscribe(dados => this.dominios = dados);
  }

}
