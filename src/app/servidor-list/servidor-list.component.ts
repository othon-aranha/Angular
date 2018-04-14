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
    this.servers = [{cdTrib: 1, alias: 'AC1-ADM'},
                    {cdTrib: 1, alias: 'AL1-ADM'},
                    {cdTrib: 1, alias: 'AM1-ADM'},
                    {cdTrib: 1, alias: 'AP1-ADM'},
                    {cdTrib: 1, alias: 'BA1-ADM'},
                    {cdTrib: 1, alias: 'CE1-ADM'},
                    {cdTrib: 1, alias: 'DF1-ADM'},
                    {cdTrib: 1, alias: 'ES1-ADM'},
                    {cdTrib: 1, alias: 'GO1-ADM'}];
    this.selectedServers = [{cdTrib: 1, alias: 'AC1-ADM'},
                    {cdTrib: 1, alias: 'AL1-ADM'},
                    {cdTrib: 1, alias: 'AM1-ADM'},
                    {cdTrib: 1, alias: 'AP1-ADM'},
                    {cdTrib: 1, alias: 'BA1-ADM'},
                    {cdTrib: 1, alias: 'CE1-ADM'},
                    {cdTrib: 1, alias: 'DF1-ADM'}]
    // this.consultarTodosServidores();
    // this.consultarServidoresdoModulo();
  }

  cloneMaquina(m: MaquinaServidora[]) {
    // tslint:disable-next-line:forin
    for (const id in m) {
      this.servers[id].alias = m[id].id.alias;
      this.servers[id].cdTrib = m[id].id.cdTrib;
    }
   }

   cloneManutencao(m: Manutencao[]) {
     // tslint:disable-next-line:forin
    for (const id in m) {
      this.servers[id].alias = m[id].id.alias;
      this.servers[id].cdTrib = m[id].id.cdTrib;
    }
   }

   consultarTodosServidores() {
    this.servers = [];
    this.maquinas = [];
    this.servidorService.listarServidores().subscribe(dados => this.maquinas = dados);
    this.cloneMaquina(this.maquinas);
  }

  consultarServidoresdoModulo() {
    this.selectedServers = [];
    this.selservers = [];
    if ( this.sigla == null ) {
      this.manutencaService.listarManutencoesdoModulo('SIGO').subscribe(dados => this.selservers = dados);
    } else {
      this.manutencaService.listarManutencoesdoModulo(this.sigla).subscribe(dados => this.selservers = dados);
    }
    this.cloneManutencao(this.selservers);
  }


  SelecionarServidor(sigla: string) {
    this.sigla = sigla;
    this.consultarServidoresdoModulo();
    this.onSelecionarServidor.emit(this.sigla);
  }

}
