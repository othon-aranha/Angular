import { Component, OnInit, AfterContentChecked, Injector } from '@angular/core';
import { BaseResourceModel } from '../../models/base-resource-model';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseResourceService } from '../../services/base-resource-service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-base-list-form',
  templateUrl: './base-list-form.component.html',
  styleUrls: ['./base-list-form.component.css']
})

export abstract class BaseListFormComponent<T extends BaseResourceModel> implements OnInit, AfterContentChecked  {
  id: any;
  alias: string;
  cols: any[];
  gridrows: Array<T> = [];
  selectedrow: T;
  pageTitle: string;
  serverErrorMessages: string[] = null;
  items: MenuItem[];

  protected route: ActivatedRoute;
  protected router: Router;
  constructor( protected injector: Injector,
    public resource: T,
    protected resourceService: BaseResourceService<T>,
    protected jsonDataToResourceFn: (jsonData) => T
  ) {
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
  }

  ngOnInit() {
    this.getResource();
  }

  getParamId() {
    if ( this.route.snapshot.paramMap.has('id') ) {
      this.id = +this.route.snapshot.paramMap.get('id');
    }
    if ( this.route.snapshot.paramMap.has('alias') ) {
      this.alias = this.route.snapshot.paramMap.get('alias');
    }
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  setPageTitle() {

  }

  protected getResource() {
    return this.resourceService.getAll()
    .subscribe(
      (resource) => {
        this.gridrows = resource;
      },
      (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
    );
  }


}
