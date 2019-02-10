import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

interface BreadCrumbItem {
  text: string;
  link?: string;
}

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css']
})
export class BarraNavegacaoComponent implements OnInit {

  items: MenuItem[];

  home: MenuItem;

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Home', url: '/home'}
    ];

  this.home = {icon: 'pi pi-home'};

  }

}
