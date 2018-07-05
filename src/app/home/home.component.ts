import { Component, OnInit } from '@angular/core';
// import { MenubarModule } from 'primeng/menubar';
import { SlideMenuModule } from 'primeng/slidemenu';
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
        {label: 'Tribunal', icon: 'fa-bar-chart'},
        {label: 'Área de Atuação', icon: 'fa-bar-chart'},
        {label: 'Domínio', icon: 'fa-bar-chart'},
        {label: 'Módulos', icon: 'fa-bar-chart', routerLink: '/modulos'},
        {label: 'Funcionalidades', icon: 'fa-puzzle-piece' },
        {label: 'Perfil', icon: 'fa-bar-chart' },
        {label: 'Usuário', icon: 'fa-users' }
      ]
      },
      {label: 'Funções', icon: 'fa-calendar'},
      {label: 'Relatórios', icon: 'fa-book'},
      {label: 'Ajuda', icon: 'fa-twitter'},
      {separator: true}
  ];
  }

}
