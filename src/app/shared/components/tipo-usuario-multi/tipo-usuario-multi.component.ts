import { Component, OnInit, EventEmitter, Output, Injectable, Input } from '@angular/core';

@Component({
  selector: 'app-tipo-usuario-multi',
  templateUrl: './tipo-usuario-multi.component.html',
  styleUrls: ['./tipo-usuario-multi.component.css']
})

@Injectable()
export class TipoUsuarioMultiComponent implements OnInit {
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onSelecionarTipoUsuario = new EventEmitter<string[]>();

    tipoUsuario = [];
    @Input() selectedTipoUsuario: string[] = [];

    constructor() {
      this.tipoUsuario = [
        {label: 'Avulso', value: 'AVULSO'},
        {label: 'Aplicação', value: 'APLICACAO'},
        {label: 'Externo', value: 'EXTERNO'},
        {label: 'Inválido', value: 'INVALIDO'},
        {label: 'Servidor', value: 'SERVIDOR'},
        {label: 'Sistema', value: 'SISTEMA'},
        {label: 'Terceirizado', value: 'TERCEIRIZADO'}
      ];    }



    ngOnInit() {
    }

    onselecionarTipoUsuario(tipo: string[]) {
      this.selectedTipoUsuario = tipo;
      this.onSelecionarTipoUsuario.emit(this.selectedTipoUsuario);
    }
}
