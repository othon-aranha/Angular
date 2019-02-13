import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Cadastro',
       items: [
        {
          label: 'Área',
          icon: 'fa-bar-chart',
          routerLink: '/area'
         },
        {
          label: 'Alias',
          icon: 'fa-bar-chart',
          routerLink: '/alias'
         },
       {
        label: 'Módulo',
        icon: 'fa-bar-chart',
        routerLink: '/modulo'
       },
       {
        label: 'Tribunal',
        icon: 'fa-bar-chart',
        routerLink: '/tribunal'
       },
       {
        label: 'Usuário',
        icon: 'fa-bar-chart',
        routerLink: '/usuario'
       },
       {
        label: 'Domínio',
        icon: 'fa-bar-chart',
        routerLink: '/dominio'
       }
      ]
      },
      {separator: true},
      {label: 'Sair', icon: 'fa-twitter', routerLink: '/login'}
  ];
  }

}
