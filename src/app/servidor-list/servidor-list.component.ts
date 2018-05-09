import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { MaquinaPk } from '../domain/maquina-pk';
import { ServidorService } from '../service/servidor.service';
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

  constructor(private servidorService: ServidorService, private manutencaService: ManutencaoService ) { }

  ngOnInit() {
    /*
    this.servers = [{cdTrib: 1, alias: 'AC1-ADM'},
                    {cdTrib: 1, alias: 'AL1-ADM'},
                    {cdTrib: 1, alias: 'AM1-ADM'},
                    {cdTrib: 1, alias: 'AP1-ADM'},
                    {cdTrib: 1, alias: 'BA1-ADM'},
                    {cdTrib: 1, alias: 'CE1-ADM'},
                    {cdTrib: 1, alias: 'DF1-ADM'},
                    {cdTrib: 1, alias: 'ES1-ADM'},
                    {cdTrib: 1, alias: 'GO1-ADM'}];
    this.selectedServers = [
                    {cdTrib: 1, alias: 'AC1-ADM'},
                    {cdTrib: 1, alias: 'AL1-ADM'},
                    {cdTrib: 1, alias: 'AM1-ADM'},
                    {cdTrib: 1, alias: 'AP1-ADM'},
                    {cdTrib: 1, alias: 'BA1-ADM'}];
    */
    this.carregarTodosServidores();
  }

  cloneMaquina(m: MaquinaServidora[]) {
    this.servers = [];
    // tslint:disable-next-line:forin
    for (const id in m) {
      this.servers[id].alias = m[id].id.alias;
      this.servers[id].cdTrib = m[id].id.cdTrib;
    }
   }

   cloneManutencao(m: Manutencao[]) {
     this.maquinas = [];
     // tslint:disable-next-line:forin
    for (const id in m) {
      this.servers[id].alias = m[id].id.alias;
      this.servers[id].cdTrib = m[id].id.cdTrib;
    }
   }

   carregarTodosServidores() {
    this.servers = [];
    this.maquinas = [];
    this.servidorService.listarServidoresdoTribunal(this.cdTrib).subscribe(dados => this.maquinas = dados);
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
