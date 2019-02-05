import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { AliasService } from '../service/alias.service';
import { ManutencaoService } from '../service/manutencao.service';
import { MaquinaServidora } from '../domain/maquina-servidora';
import { Manutencao } from '../domain/manutencao';
import { Servidor } from '../domain/servidor';

@Component({
  selector: 'app-servidor-list',
  templateUrl: './servidor-list.component.html',
  styleUrls: ['./servidor-list.component.css']
})


export class ServidorListComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSelecionarTribunal = new EventEmitter<number>();
  @Input() cdTrib: number;

  servers = [];
  maquinas = [];
  selectedServers = [];
  selservers = [];

  siglaModulo: String;

  constructor(private aliasService: AliasService, private manutencaService: ManutencaoService ) { }

  ngOnInit() {

    this.servers = [{name: 'AC1-ADM', code: 'AC1-ADM'},
                    {name: 'AL1-ADM', code: 'AL1-ADM'},
                    {name: 'AM1-ADM', code: 'AM1-ADM'},
                    {name: 'AP1-ADM', code: 'AP1-ADM'},
                    {name: 'BA1-ADM', code: 'BA1-ADM'},
                    {name: 'CE1-ADM', code: 'CE1-ADM'},
                    {name: 'DF1-ADM', code: 'DF1-ADM'},
                    {name: 'ES1-ADM', code: 'ES1-ADM'},
                    {name: 'GO1-ADM', code: 'GO1-ADM'}];
    this.selectedServers = [
      {name: 'AC1-ADM', code: 'AC1-ADM'},
      {name: 'AL1-ADM', code: 'AL1-ADM'},
      {name: 'AM1-ADM', code: 'AM1-ADM'},
      {name: 'AP1-ADM', code: 'AP1-ADM'}];
    // this.carregarTodosServidores();
  }

  cloneMaquina(m: MaquinaServidora[]) {
    this.servers = [];
    // tslint:disable-next-line:forin
    for (const id in m) {
      this.servers[id].code = m[id].id.alias;
      this.servers[id].name = m[id].id.alias;
    }
   }

   cloneManutencao(m: Manutencao[]) {
     this.maquinas = [];
     // tslint:disable-next-line:forin
    for (const id in m) {
      this.servers[id].code = m[id].id.alias;
      this.servers[id].name = m[id].id.alias;
    }
   }

   carregarTodosServidores() {
    this.servers = [];
    this.maquinas = [];
    this.aliasService.listarServidoresdoTribunal(1).subscribe(dados => this.maquinas = dados);
    this.cloneMaquina(this.maquinas);
  }

  carregarServidoresdoModulo() {
    this.selectedServers = [];
    this.selservers = [];
    if ( this.siglaModulo == null ) {
      this.manutencaService.listarManutencoesdoModulo('SIGO').subscribe(dados => this.selservers = dados);
    } else {
      this.manutencaService.listarManutencoesdoModulo(this.siglaModulo).subscribe(dados => this.selservers = dados);
    }
    this.cloneManutencao(this.selservers);
  }


  onselecionarTribunal(cdTrib: number) {
    this.cdTrib = cdTrib;
    this.carregarServidoresdoModulo();
    this.onSelecionarTribunal.emit(this.cdTrib);
  }

}
