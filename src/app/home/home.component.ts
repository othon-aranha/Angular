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
       items: [{
                label: 'Módulos',
                icon: 'fa-bar-chart',
                routerLink: '/modulos'
       }]
      },
      {label: 'Calendar', icon: 'fa-calendar'},
      {label: 'Documentation', icon: 'fa-book'},
      {label: 'Support', icon: 'fa-support'},
      {label: 'Social', icon: 'fa-twitter'},
      {separator: true}
  ];
  }

}
