import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css']
})
export class BarraNavegacaoComponent implements OnInit {

  rota: any[];
  constructor() { }

  ngOnInit() {

  }

  public atualizarRota(rota: any[]): void {
    console.log(rota);
    this.rota = rota;
  }

}
