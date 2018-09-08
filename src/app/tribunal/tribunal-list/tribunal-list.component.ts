import { TribunalService } from './../../service/tribunal.service';
import { MenuItem, Message } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Tribunal } from '../../domain/tribunal';

@Component({
  selector: 'app-tribunal-list',
  templateUrl: './tribunal-list.component.html',
  styleUrls: ['./tribunal-list.component.css']
})
export class TribunalListComponent implements OnInit {
  cols: any[];
  tribunais = [];
  alias = [];
  tribunal: Tribunal = null;
  selectedTribunal: Tribunal = null;
  items: MenuItem[];
  msgs: Message[];
  displayDialog: boolean;
  constructor(private tribunalService: TribunalService, , private router: Router) { }

  ngOnInit() {

        // Colunas da Grid //
        this.cols = [
          {header: 'Id', field: 'id', classe: 'ui'},
          {header: 'Sigla', field: 'sigla', classe: 'ui-p-2'},
          {header: 'Nome', field: 'nome', classe: 'ui-p-2'},
          {header: 'Padrão', field: 'acesso', classe: 'ui-p-2'}
        ];

        // Itens do popup menu //
        this.items = [
          { label: 'Visualizar', icon: 'fa-search', command: (event) => this.viewTribunal(this.selectedTribunal) },
          { label: 'Excluir', icon: 'fa-close', command: (event) => this.deleteTribunal(this.selectedTribunal) }
        ];

        this.consultar();
  }

  public consultar() {
    return this.tribunalService.retornaTribunalPadrao().subscribe(dados => this.tribunais = dados);
  }


  viewTribunal(tribunal: Tribunal) {
    this.router.navigate(['/tribunal/', tribunal.id]);
  }

  deleteTribunal(tribunal: Tribunal) {

  }

}
