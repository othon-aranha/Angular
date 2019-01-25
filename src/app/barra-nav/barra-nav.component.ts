import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-barra-nav',
  templateUrl: './barra-nav.component.html',
  styleUrls: ['./barra-nav.component.css']
})
export class BarraNavComponent implements OnInit {
  @Input() rota: any[];
  constructor() { }

  ngOnInit() {
    this.rota = [
      {rota: '/dominio', descricao: 'Domínio'},
      {rota: '/dominio/new', descricao: 'Novo'},
      {rota: '/dominio/:id/editar', descricao: 'Editar'}
  ];
  }

  public atualizarRota(rota: any[]): void {
    console.log(rota);
    // this.rota = rota;
  }

}
