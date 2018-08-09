import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-status-multi',
  templateUrl: './status-multi.component.html',
  styleUrls: ['./status-multi.component.css']
})
export class StatusMultiComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSelecionarStatus = new EventEmitter<String[]>();

  listStatus = [];
  selectedStatus = [];

  constructor() { }

  ngOnInit() {
    this.listStatus = [
      {label: 'Ativo', value: 'ATIVO'},
      {label: 'Inativo', value: 'INATIVO'}];
  }

  onselecionarStatus(status: string[]) {
    this.selectedStatus = status;
    this.onSelecionarStatus.emit(this.selectedStatus);
  }


}
