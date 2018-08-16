import { Component, OnInit } from '@angular/core';
import { Dominio } from '../../domain/dominio';
import { DominioService } from '../../service/dominio.service';

@Component({
  selector: 'app-dominio-list',
  templateUrl: './dominio-list.component.html',
  styleUrls: ['./dominio-list.component.css']
})
export class DominioListComponent implements OnInit {
  dominios = [];
  selecteddominio = Dominio;
  cols: any[];
  constructor(private dominioService: DominioService) { }

  ngOnInit() {
    // Colunas da Grid //
    this.cols = [
      {header: 'Id', field: 'id', classe: 'ui'},
      {header: 'Nome', field: 'nome', classe: 'ui-p-2'},
      {header: 'Código', field: 'cd', classe: 'ui-p-2'},
      {header: 'Descrição', field: 'descricao', classe: 'ui-p-2'}];

    this.consultarDominios();
  }

  consultarDominios() {
    this.dominioService.getDominios().subscribe(dados => this.dominios = dados);
  }

}
