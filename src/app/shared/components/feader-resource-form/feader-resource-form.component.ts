import { Component, OnInit, Input, Injector } from '@angular/core';
import { BaseResourceFormComponent } from '../base-resource-form/base-resource-form.component';
import { BaseResourceModel } from '../../models/base-resource-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feader-resource-form',
  templateUrl: './feader-resource-form.component.html',
  styleUrls: ['./feader-resource-form.component.css']
})
export class FeaderResourceFormComponent implements OnInit {
  @Input() urlBack: any;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  retornar(event: any) {
    this.router.navigate([this.urlBack]);
  }

}
