import { Component, OnInit } from '@angular/core';
import { ModuloService } from '../../service/modulo.service';
import { MenuItem, Message } from 'primeng/api';
import { Modulo } from '../../domain/modulo';
import { TipoAplicacaoMultiComponent } from '../../tipo-aplicacao-multi/tipo-aplicacao-multi.component';
import { MaquinaService } from '../../service/maquina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo-list.component.html',
  styleUrls: ['./modulo-list.component.css']
})

export class ModuloListComponent implements OnInit {

  tipo: string[];
  cols: any[];
  modulos = [];
  alias = [];
  selectedAlias = [];
  tipoAplicacao = [];
  modulo: Modulo = null;
  selectedModulo: Modulo = null;
  items: MenuItem[];
  msgs: Message[];
  displayDialog: boolean;


  // tslint:disable-next-line:max-line-length
  constructor(private moduloService: ModuloService,
              private tipoAplic: TipoAplicacaoMultiComponent,
              private router: Router) {
   }

  ngOnInit() {
    this.tipoAplicacao = [
      {label: 'Aplicação Desktop', value: 'DESKTOP'},
      {label: 'Aplicação Web', value: 'WEB'},
      {label: 'Híbrida', value: 'HIBRIDO'}
    ];

    this.tipo = this.tipoAplic.selectedTipo;
    this.consultarporTipodeAplicacao(this.tipoAplic.selectedTipo);

    // Colunas da Grid //
    this.cols = [
      {header: 'Id', field: 'id', classe: 'ui'},
      {header: 'Sigla', field: 'sigla', classe: 'ui-p-2'},
      // {header: 'Nome', field: 'nome', classe: 'ui-p-2'},
      // {header: 'Descricao', field: 'descricao', classe: 'ui-p-2'},
      {header: 'Alias', field: 'alias', classe: 'ui-p-4'},
      {header: 'Esquema', field: 'esquema', classe: 'ui-p-4'},
      // {header: 'Caminho Modulo', field: 'caminhoModulo', classe: 'ui-p-2'},
      // {header: 'Caminho Help', field: 'caminhoHelp', classe: 'ui-p-2'},
      // {header: 'Executavel', field: 'nomeExecutavel', classe: 'ui-p-2'},
      {header: 'Versão', field: 'versao', classe: 'ui-p-2'},
      // {header: 'DataModulo' , field: 'dataModulo', classe: 'ui-p-2'},
      // {header: 'Data Help', field: 'dataHelp', classe: 'ui-p-2'},
      {header: 'Tabela Mensagem', field: 'mensagemCompartilhada', classe: 'ui-p-2'},
      {header: 'Controla Acesso', field: 'controlaAcesso', classe: 'ui-p-2'},
      {header: 'Tipo do Modulo', field: 'tipoModulo', classe: 'ui-p-2'},
      {header: 'Tipo de Atualizacao', field: 'tipoAtualizacao', classe: 'ui-p-2'},
      {header: 'Status do Modulo', field: 'statusModulo', classe: 'ui-p-2'}
  ];


  // Itens do popup menu //
  this.items = [
    { label: 'Visualizar', icon: 'fa-search', command: (event) => this.viewModulo(this.selectedModulo) },
    { label: 'Excluir', icon: 'fa-close', command: (event) => this.deleteModulo(this.selectedModulo) }
];

  }

  onSelecionarTipoAplicacao(tipoAplic: string[]) {
    this.tipo = tipoAplic;
    this.consultarporTipodeAplicacao(this.tipo);
  }

  onRowSelect(event) {
    this.selectedModulo = this.cloneModulo(event.data);
    this.displayDialog = true;
  }

  alteraTipoModulo(event) {
    const modulos = [...this.modulos];
    modulos[this.modulos.indexOf(this.selectedModulo)] = this.modulo;
    this.modulos = modulos;
  }

  deleteModulo(modulo: Modulo) {
    let index = -1;
    for (let i = 0; i < this.modulos.length; i++) {
      if (this.modulos[i].id === modulo.id) {
          index = i;
          break;
      }
    }
    this.modulos.splice(index, 1);

    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Módulo excluído', detail: modulo.id + ' - ' + modulo.sigla });
  }


  consultarporTipodeAplicacao(tipo: string[]) {
    this.modulos = [];
    if ( tipo.length === 0 ) {
      return this.moduloService.listarModulosporTipoModulo('').subscribe(dados => this.modulos = dados);
    } else {
      return this.moduloService.listarModulosporTipoModulo(tipo.join()).subscribe(dados => this.modulos = dados);
    }
  }

  viewModulo(modulo: Modulo) {
    this.router.navigate(['/modulo/', modulo.id]);
  }

  cloneModulo(m: Modulo): Modulo {
    const modulo = new Modulo();
    // tslint:disable-next-line:forin
    for (const prop in m) {
        modulo[prop] = m[prop];
    }
    return modulo;
   }
}
