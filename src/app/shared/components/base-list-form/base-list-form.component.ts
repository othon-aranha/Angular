import { Component, OnInit, AfterContentChecked, Injector } from '@angular/core';
import { BaseResourceModel } from '../../models/base-resource-model';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseResourceService } from '../../services/base-resource-service';

@Component({
  selector: 'app-base-list-form',
  templateUrl: './base-list-form.component.html',
  styleUrls: ['./base-list-form.component.css']
})
export abstract class BaseListFormComponent<T extends BaseResourceModel> implements OnInit, AfterContentChecked  {
  id: any;
  cols: any[];
  gridrows: Array<T> = [];
  selectedrow: T;
  pageTitle: string;
  serverErrorMessages: string[] = null;

  protected route: ActivatedRoute;
  protected router: Router;
  constructor(    protected injector: Injector,
    public resource: T,
    protected resourceService: BaseResourceService<T>,
    protected jsonDataToResourceFn: (jsonData) => T
  ) {
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
  }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  setPageTitle() {

  }

  protected getResource() {
    return this.resourceService.getAll().subscribe(dados => this.gridrows = dados);

    /* this.resourceService.getAll()
      .subscribe(
        resource => this.actionsForSuccess(resource),
        error => this.actionsForError(error)
      ); */
  }


}
