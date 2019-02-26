import { Component, OnInit, EventEmitter, Output, Injectable, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tipo-usuario-multi',
  templateUrl: './tipo-usuario-multi.component.html',
  styleUrls: ['./tipo-usuario-multi.component.css']
})

@Injectable()
export class TipoUsuarioMultiComponent implements OnInit, OnChanges {
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onSelecionarTipoUsuario = new EventEmitter<String[]>();

    tipoUsuario = [];
    @Input() selectedTipoUsuario: String[] = [];

    constructor() {
      this.tipoUsuario = [
        {label: 'Avulso', value: 'AVULSO'},
        {label: 'Aplicação', value: 'APLICACAO'},
        {label: 'Externo', value: 'EXTERNO'},
        {label: 'Inválido', value: 'INVALIDO'},
        {label: 'Servidor', value: 'SERVIDOR'},
        {label: 'Sistema', value: 'SISTEMA'},
        {label: 'Terceirizado', value: 'TERCEIRIZADO'}
      ];
    }

    ngOnChanges() {
      this.onselecionarTipoUsuario(this.selectedTipoUsuario);
    }

    ngOnInit() {
    }

    onselecionarTipoUsuario(tipo: String[]) {
      this.selectedTipoUsuario = tipo;
      this.onSelecionarTipoUsuario.emit(this.selectedTipoUsuario);
    }
}
