import { Component, OnInit, Input } from '@angular/core';

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

  @Input() items: Array<BreadCrumbItem> = [];
  constructor() { }

  ngOnInit() {

  }


  isTheLastItem(item: BreadCrumbItem): boolean {
    const index = this.items.indexOf(item);
    return index + 1 === this.items.length;
  }

  public atualizarRota(rota: any[]): void {
    console.log(rota);
    this.items = rota;
  }

}
