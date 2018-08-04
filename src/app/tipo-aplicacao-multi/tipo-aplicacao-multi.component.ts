import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-tipo-aplicacao-multi',
  templateUrl: './tipo-aplicacao-multi.component.html',
  styleUrls: ['./tipo-aplicacao-multi.component.css']
})

@Injectable()
export class TipoAplicacaoMultiComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSelecionarTipoAplicacao = new EventEmitter<String[]>();

  tipoAplic = [];
  selectedTipo = ['DESKTOP', 'WEB', 'HIBRIDO'];
  constructor() {
        this.tipoAplic = [
          {label: 'Desktop', value: 'DESKTOP'},
          {label: 'Web', value: 'WEB'},
          {label: 'Híbrida', value: 'HIBRIDO'}
      ];
   }

  ngOnInit() {
   }

  tiposSelecionados() {
    return this.selectedTipo;
  }

  onselecionarTipoAplicacao(tipo: String[]) {
    this.onSelecionarTipoAplicacao.emit(this.selectedTipo);
  }

}
