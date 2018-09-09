import { Component, OnInit } from '@angular/core';
import { SlideMenuModule } from 'primeng/slidemenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
    {label: 'Cadastro', icon: 'fa-compose',
     items: [{
              label: 'Tribunal',
              icon: 'fa-bar-chart',
              routerLink: '/tribunal'
     },
     {
      label: 'Módulos',
      icon: 'fa-bar-chart',
      routerLink: '/modulos'
    }
    ]
    },
    {separator: true},
    {label: 'Calendar', icon: 'fa-calendar'},
    {separator: true},
    {label: 'Documentation', icon: 'fa-book'},
    {separator: true},
    {label: 'Support', icon: 'fa-support'},
    {separator: true},
    {label: 'Social', icon: 'fa-twitter'},
    {separator: true}
];
  }

}
