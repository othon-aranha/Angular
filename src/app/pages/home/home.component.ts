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
       icon: 'fas fa-file-invoice',
       items: [
        {
          label: 'Alias',
          icon: 'pi pi-fw pi-sitemap',
          routerLink: '/alias'
         },
       {
        label: 'Módulo',
        icon: 'fas fa-cogs',
        routerLink: '/modulo'
       },
       {
        label: 'Tribunal',
        icon: 'fas fa-gavel',
        routerLink: '/tribunal'
       },
       {
        label: 'Usuário',
        icon: 'far fa-address-card',
        routerLink: '/usuario'
       },
       {
        label: 'Domínio',
        icon: 'fas fa-table',
        routerLink: '/dominio'
       }
      ]
      },
      {separator: true},
      {label: 'Sair', icon: 'fas fa-twitter', routerLink: '/login'}
  ];
  }

}
