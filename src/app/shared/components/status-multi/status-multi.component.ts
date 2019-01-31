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
  selectedStatus: String[] = [];

  constructor() { }

  ngOnInit() {
    this.listStatus = [
      {label: 'Ativo', value: 'ATIVO'},
      {label: 'Inativo', value: 'INATIVO'}];
  }

  onselecionarStatus(status: String[]) {
    this.selectedStatus = status;
    console.log(this.selectedStatus);
    this.onSelecionarStatus.emit(this.selectedStatus);
  }

}
