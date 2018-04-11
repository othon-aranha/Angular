import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { MaquinaPk } from '../domain/maquina-pk';
import { ServidorService } from '../service/servidor.service';
import { ManutencaoService } from '../service/manutencao.service';
import { MaquinaServidora } from '../domain/maquina-servidora';
import { Manutencao } from '../domain/manutencao';

@Component({
  selector: 'app-servidor-list',
  templateUrl: './servidor-list.component.html',
  styleUrls: ['./servidor-list.component.css']
})
export class ServidorListComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSelecionarServidor = new EventEmitter<String>();

  servers: MaquinaPk[];
  maquinas: MaquinaServidora[];
  selectedServers: MaquinaPk[];
  selservers: Manutencao[];

  sigla: String;

  constructor(private servidorService: ServidorService, private manutencaService: ManutencaoService ) { }

  ngOnInit() {
    this.consultarTodosServidores();
    this.consultarServidoresdoModulo();
  }

  consultarTodosServidores() {
    this.servers = [];
    this.maquinas = [];
    return this.servidorService.listarServidores('').subscribe(dados => this.maquinas = dados);
    this.cloneMaquina(this.maquinas);
  }

  consultarServidoresdoModulo() {
    this.selectedServers = [];
    this.selservers = [];
    this.manutencaService.listarManutencoesdoModulo('SIGO').subscribe(dados => this.selservers = dados);
    this.cloneManutencao(this.selservers);
  }


  cloneMaquina(m: MaquinaServidora[]) {
    // tslint:disable-next-line:forin
    for (const id in m) {
      this.servers[id] = m[id].id;
    }
   }

   cloneManutencao(m: Manutencao[]) {
     // tslint:disable-next-line:forin
    for (const id in m) {
      this.selectedServers[id] = m[id].id;
    }
   }

  SelecionarServidor(sigla: string) {
    this.sigla = sigla;
    this.consultarServidoresdoModulo();
    this.onSelecionarServidor.emit(this.sigla);
  }

}
