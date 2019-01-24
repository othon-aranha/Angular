import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-status-modulo-list',
  templateUrl: './status-modulo-list.component.html',
  styleUrls: ['./status-modulo-list.component.css']
})
export class StatusModuloListComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix

  @Output() OnSelecionarStatusModulo: EventEmitter<string[]> = new EventEmitter();

  selectedStatus: string[];
  listStatusModulo = [];
  constructor() { }

  ngOnInit() {
    this.listStatusModulo = [
      {label: 'Produção', value: 'PRODUCAO'},
      {label: 'Homologação', value: 'HOMOLOGACAO'},
      {label: 'Desenvolvimento', value: 'DESENVOLVIMENTO'}
    ];
  }

  SelecionarStatusModulo(status: Array<string>): void {
    this.selectedStatus = status;
    this.OnSelecionarStatusModulo.emit(this.selectedStatus);
  }

}
