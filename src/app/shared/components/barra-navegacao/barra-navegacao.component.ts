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
export class BarraNavegacaoComponent implements OnInit, OnChanges {

  @Input() items: Array<BreadCrumbItem> = [];
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    // console.log(this.items.toString());
  }


  isTheLastItem(item: BreadCrumbItem): boolean {
    const index = this.items.indexOf(item);
    return index + 1 === this.items.length;
  }

}
