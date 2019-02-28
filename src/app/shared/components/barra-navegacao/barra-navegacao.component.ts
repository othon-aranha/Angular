import { Component, OnInit, Input, OnChanges } from '@angular/core';

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

  @Input() breadcrumbitems: Array<BreadCrumbItem> = [];
  constructor() { }

  ngOnInit() {

  }

  isTheLastItem(item: BreadCrumbItem): boolean {
    const index = this.breadcrumbitems.indexOf(item);
    return index + 1 === this.breadcrumbitems.length;
  }

}
