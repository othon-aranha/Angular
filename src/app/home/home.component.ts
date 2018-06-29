import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  items: MenuItem[];
  exibirMenu: Boolean = true;

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Cadastro',
       items: [{
                label: 'Módulos',
                icon: 'fa-bar-chart',
                routerLink: '/modulos'
       }]
      },
      {label: 'Funções', icon: 'fa-calendar'},
      {label: 'Relatórios', icon: 'fa-book'},
      {label: 'Ajuda', icon: 'fa-support'},
      {label: 'Sair', icon: 'fa-twitter'},
      {separator: true}
  ];
  }

}
