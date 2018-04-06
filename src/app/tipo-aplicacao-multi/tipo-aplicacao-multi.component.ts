import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

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
          {label: 'Aplicação Desktop', value: 'DESKTOP'},
          {label: 'Aplicação Web', value: 'WEB'},
          {label: 'Híbrida', value: 'HIBRIDO'}
      ];
   }

  ngOnInit() {
   }

  tiposSelecionados() {
    return this.selectedTipo;
  }

  selecionarTipoAplicacao(tipo: String[]) {
    this.onSelecionarTipoAplicacao.emit(this.selectedTipo);
  }

}
