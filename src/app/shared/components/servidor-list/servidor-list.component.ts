import { TipoAplicacao } from './../../../domain/tipo-aplicacao';
import { Component, OnInit, EventEmitter, Input, Output, OnChanges, ViewChild } from '@angular/core';

import { AliasService } from '../../../service/alias.service';
import { ManutencaoService } from '../../../service/manutencao.service';
import { MaquinaServidora } from '../../../domain/maquina-servidora';
import { Manutencao } from '../../../domain/manutencao';
import { Servidor } from '../../../domain/servidor';
import { SelectItem } from 'primeng/api';
import { Listbox } from 'primeng/primeng';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-servidor-list',
  templateUrl: './servidor-list.component.html',
  styleUrls: ['./servidor-list.component.css']
})


export class ServidorListComponent implements OnInit, OnChanges {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSelecionarTribunal = new EventEmitter<number>();

  servers: SelectItem[];
  maquinas: Array<MaquinaServidora> = [];
  selectedServers: SelectItem[];
  selservers: Array<Manutencao> = [];

  @ViewChild('listBox') accessor: Listbox;
  // @ViewChild('listBox', { read: NgModel }) model: NgModel;

  @Input() siglaModulo: String;
  @Input() cdTrib: number;

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

   marcaDesmarcaAlias(event: Event) {
     const item: any = event.returnValue;
     console.log(this.selectedServers);
     if ( this.selectedServers.indexOf(item[item.value.length - 1].value) !== 0 ) {
      this.selectedServers = [...this.selectedServers, {value: item[item.length - 1].value }];
     }
   }

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
    this.aliasService.listarMaquinasServidorasdoTribunal(this.cdTrib)
    .subscribe(
      (resource) => {
        this.maquinas = resource;
        this.maquinas.map((item) => { this.servers =
          [...this.servers, { label: item.alias , value: item.id }]; } );
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
           [...this.selectedServers, {label: item['maquinaservidora'].alias , value: item['maquinaservidora'].id} ]; });
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
