import { TipoAplicacao } from './../../../domain/tipo-aplicacao';
import { Component, OnInit, EventEmitter, Input, Output, OnChanges } from '@angular/core';

import { AliasService } from '../../../service/alias.service';
import { ManutencaoService } from '../../../service/manutencao.service';
import { MaquinaServidora } from '../../../domain/maquina-servidora';
import { Manutencao } from '../../../domain/manutencao';
import { Servidor } from '../../../domain/servidor';
import { SelectItem } from 'primeng/api';


interface Server {
  name: string;
  code: number;
}

@Component({
  selector: 'app-servidor-list',
  templateUrl: './servidor-list.component.html',
  styleUrls: ['./servidor-list.component.css']
})


export class ServidorListComponent implements OnInit, OnChanges {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSelecionarTribunal = new EventEmitter<number>();
  @Input() cdTrib: number;

  servers: Server[];
  maquinas: Array<MaquinaServidora> = [];
  selectedServers: Server[];
  selservers: Array<Manutencao> = [];

  @Input() siglaModulo: String;
  @Input() cdTrig: number;

  constructor(private aliasService: AliasService, private manutencaService: ManutencaoService ) { }

  ngOnInit() {

    /* this.servers = [{label: 'AC1-ADM', value: 'AC1-ADM'},
                    {label: 'AL1-ADM', value: 'AL1-ADM'},
                    {label: 'AM1-ADM', value: 'AM1-ADM'},
                    {label: 'AP1-ADM', value: 'AP1-ADM'},
                    {label: 'BA1-ADM', value: 'BA1-ADM'},
                    {label: 'CE1-ADM', value: 'CE1-ADM'},
                    {label: 'DF1-ADM', value: 'DF1-ADM'},
                    {label: 'ES1-ADM', value: 'ES1-ADM'},
                    {label: 'GO1-ADM', value: 'GO1-ADM'}];
    this.selectedServers = [
                    {label: 'AC1-ADM', value: 'AC1-ADM'},
                    {label: 'AL1-ADM', value: 'AL1-ADM'},
                    {label: 'AM1-ADM', value: 'AM1-ADM'},
                    {label: 'AP1-ADM', value: 'AP1-ADM'}]; */
    // this.carregarTodosServidores();
  }

  /*
  cloneMaquina(m: MaquinaServidora[]) {
    this.servers = [];
    // tslint:disable-next-line:forin
    for (const id in m) {
      this.servers[id].value = m[id].alias;
      this.servers[id].name = m[id].alias;
    }
   }

   cloneManutencao(m: Manutencao[]) {
     this.maquinas = [];
     // tslint:disable-next-line:forin
    for (const id in m) {
      this.servers[id].value = m[id].maquinaServidora.alias;
      this.servers[id].name = m[id].maquinaServidora.alias;
    }
   }
   */

   ngOnChanges() {
      if ( this.cdTrib !== undefined ) {
        this.carregarTodosServidores();
      }
      if ( ( this.siglaModulo !== undefined ) && ( this.siglaModulo !== '' ) ) {
        this.carregarServidoresdoModulo();
      }
      // console.log(this.selectedServers);
   }

   carregarTodosServidores() {
    this.servers = [];
    this.maquinas = [];
    this.aliasService.listarServidoresdoTribunal(this.cdTrib)
    .subscribe(
      (resource) => {
        this.maquinas = resource;
        this.maquinas.map((item) => { this.servers =
          [...this.servers, { name: item.alias , code: item.id }]; } );
        /* for (let i = 0; i < this.maquinas.length; i++) {

        } */
      },
      (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
    );
    // this.cloneMaquina(this.maquinas);
  }

  carregarServidoresdoModulo() {
    this.selectedServers = [];
    this.selservers = [];
    if ( this.siglaModulo !== null ) {
      this.manutencaService.listarManutencoesdoModulo(this.siglaModulo)
      .subscribe(
        (resource) => {
          this.selservers = resource;
          this.selservers.map((item) => { this.selectedServers =
            // [...this.selectedServers, item['maquinaservidora'].alias]; });
           [...this.selectedServers, { name: item['maquinaservidora'].alias , code: item['maquinaservidora'].id }]; });
          /* for (let i = 0; i < this.selservers.length; i++) {
            this.selectedServers = [...this.selectedServers, {label: this.maquinas[i].id.alias , value: this.maquinas[i].id.alias}];
          } */
        },
        (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
      );
    }
    // this.cloneManutencao(this.selservers);
  }


  /*
  onselecionarTribunal(cdTrib: number) {
    this.cdTrib = cdTrib;
    this.carregarServidoresdoModulo();
    this.onSelecionarTribunal.emit(this.cdTrib);
  }
  */
}
