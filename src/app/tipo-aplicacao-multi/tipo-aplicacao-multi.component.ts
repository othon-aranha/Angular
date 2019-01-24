import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-tipo-aplicacao-multi',
  templateUrl: './tipo-aplicacao-multi.component.html',
  styleUrls: ['./tipo-aplicacao-multi.component.css']
})

@Injectable()
export class TipoAplicacaoMultiComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSelecionarTipoAplicacao = new EventEmitter<string[]>();

  tipoAplic = [];
  titulo: string;
  @Input() selectedTipo: Array<string> = [];
  constructor() {
        this.tipoAplic = [
          {label: 'Desktop', value: 'DESKTOP'},
          {label: 'Web', value: 'WEB'},
          {label: 'Híbrida', value: 'HIBRIDO'}
      ];
   }

  ngOnInit() {
    this.titulo = 'Tipo de Aplicação';
   }

   onselecionarTipoAplicacao(tipo: string[]): void {
    // this.selectedTipo = tipo;
    this.onSelecionarTipoAplicacao.emit(tipo);
  }
}
