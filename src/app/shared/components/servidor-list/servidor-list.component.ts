import { TipoAplicacao } from './../../../domain/tipo-aplicacao';
import { Component, OnInit, EventEmitter, Input, Output, OnChanges } from '@angular/core';

import { AliasService } from '../../../service/alias.service';
import { ManutencaoService } from '../../../service/manutencao.service';
import { MaquinaServidora } from '../../../domain/maquina-servidora';
import { Manutencao } from '../../../domain/manutencao';
import { Servidor } from '../../../domain/servidor';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-servidor-list',
  templateUrl: './servidor-list.component.html',
  styleUrls: ['./servidor-list.component.css']
})


export class ServidorListComponent implements OnInit, OnChanges {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSelecionarTribunal = new EventEmitter<number>();
  @Input() cdTrib: number;

  servers: SelectItem[] = [];
  maquinas = [];
  selectedServers: SelectItem[] = [];
  selservers = [];

  @Input() siglaModulo: String;
  @Input() cdTrig: number;

  constructor(private aliasService: AliasService, private manutencaService: ManutencaoService ) { }

  ngOnInit() {


  }

   ngOnChanges() {
      if ( this.cdTrib !== undefined ) {
        this.carregarTodosServidores();
      }
      if ( this.siglaModulo !== undefined ) {
        this.carregarServidoresdoModulo();
      }
   }

   carregarTodosServidores() {
    this.servers = [];
    this.maquinas = [];
    this.aliasService.listarServidoresdoTribunal(this.cdTrib)
    .subscribe(
      (resource) => {
        this.maquinas = resource;
        for (let i = 0; i < this.maquinas.length; i++) {
          this.servers = [...this.servers, {label: this.maquinas[i].id.alias , value: this.maquinas[i].id.alias}];
        }
      },
      (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
    );
  }

  carregarServidoresdoModulo() {
    this.selectedServers = [];
    this.selservers = [];
    if ( this.siglaModulo !== null ) {
      this.manutencaService.listarManutencoesdoModulo(this.siglaModulo)
      .subscribe(
        (resource) => {
          this.selservers = resource;
          for (let i = 0; i < this.selservers.length; i++) {
            this.selectedServers = [...this.selectedServers, {label: this.maquinas[i].id.alias , value: this.maquinas[i].id.alias}];
            // this.selectedServers = [...this.selectedServers, this.maquinas[i].id.alias]
          }
        },
        (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
      );
    }
  }


}
