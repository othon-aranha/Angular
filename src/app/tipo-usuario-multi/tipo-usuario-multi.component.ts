import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tipo-usuario-multi',
  templateUrl: './tipo-usuario-multi.component.html',
  styleUrls: ['./tipo-usuario-multi.component.css']
})
export class TipoUsuarioMultiComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSelecionarTipoUsuario = new EventEmitter<String[]>();

  tipoUsuario = [];
  selectedTipoUsuario = ['AVULSO', 'APLICACAO', 'EXTERNO', 'INVALIDO', 'SERVIDOR', 'SISTEMA', 'TERCEIRIZADO'];
  constructor() {
    this.tipoUsuario = [
      {label: 'Avulso', value: 'AVULSO'},
      {label: 'De aplicação', value: 'APLICACAO'},
      {label: 'Externo', value: 'EXTERNO'},
      {label: 'Inválido', value: 'INVALIDO'},
      {label: 'Servidor', value: 'SERVIDOR'},
      {label: 'Sistema', value: 'SISTEMA'},
      {label: 'Terceirizado', value: 'TERCEIRIZADO'}
  ];
   }

  ngOnInit() {
  }

  tiposSelecionados() {
    return this.selectedTipoUsuario;
  }

  onselecionarTipoAplicacao(tipo: String[]) {
    this.onSelecionarTipoUsuario.emit(this.selectedTipoUsuario);
  }

}
