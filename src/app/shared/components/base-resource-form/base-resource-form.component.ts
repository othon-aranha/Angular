import { OnInit, AfterContentChecked, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseResourceModel } from '../../models/base-resource-model';
import { BaseResourceService } from '../../services/base-resource-service';

import { switchMap } from 'rxjs/operators';

import toastr from 'toastr';


export abstract class BaseResourceFormComponent<T extends BaseResourceModel> implements OnInit, AfterContentChecked {

  id: number;
  currentAction: string;
  resourceForm: FormGroup;
  pageTitle: string;
  serverErrorMessages: string[] = null;
  submittingForm: boolean = false;

  protected route: ActivatedRoute;
  protected router: Router;
  protected formBuilder: FormBuilder;

  constructor(
    protected injector: Injector,
    public resource: T,
    protected resourceService: BaseResourceService<T>,
    protected jsonDataToResourceFn: (jsonData) => T
  ) {
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.formBuilder = this.injector.get(FormBuilder);
  }

  getParamId() {
    if ( this.route.snapshot.paramMap.has('id') ) {
      this.id = +this.route.snapshot.paramMap.get('id');
    }
  }

  ngOnInit() {
    this.getParamId();
    this.setCurrentAction();
    this.buildResourceForm();
    this.loadResource();
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  submitForm() {
    this.submittingForm = true;
    if ( this.validForm() ) {
      if ( this.currentAction === 'new' ) {
        this.createResource();
      } else { // currentAction == "edit"
        this.updateResource();
      }
    }
  }

  validForm(): boolean {
    let retorno = true;
    if ( this.resourceForm.status === 'INVALID'  ) {

      Object.keys(this.resourceForm.controls).forEach((key) => {
        if ( this.resourceForm.get(key).status === 'INVALID' ) {
          toastr.error('O campo ' + key + ' está inválido');
          retorno = false;
        }
       });
    }
    return retorno;
  }


  // PRIVATE METHODS

  protected setCurrentAction() {
    if ( this.route.snapshot.url[0].path === 'new' ) {
      this.currentAction = 'new';
    } else {
      this.currentAction = 'edit';
    }
  }

  protected loadResource() {
    if (this.currentAction === 'edit') {

      this.route.paramMap.pipe(
        switchMap(params => this.resourceService.getById(+params.get('id')))
      )
      .subscribe(
        (resource) => {
          this.resource = resource;
          this.resourceForm.patchValue(resource); // binds loaded resource data to resourceForm
          this.onAfterloadResource();
        },
        (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
      );
    }
  }


  protected setPageTitle() {
    if (this.currentAction === 'new') {
      this.pageTitle = this.creationPageTitle();
    } else {
      this.pageTitle = this.editionPageTitle();
    }
  }

  protected creationPageTitle(): string {
    return 'Novo';
  }

  protected editionPageTitle(): string {
    return 'Edição';
  }


  protected createResource() {
    const recurso: T = this.jsonDataToResourceFn(this.resourceForm.value);

    this.resourceService.create(recurso)
      .subscribe(
        resource => this.actionsForSuccess(resource),
        error => this.actionsForError(error)
      );
  }


  protected updateResource() {
    const recurso: T = this.jsonDataToResourceFn(this.resourceForm.value);

    this.resourceService.update(recurso)
      .subscribe(
        resource => this.actionsForSuccess(resource),
        error => this.actionsForError(error)
      );
  }

  protected abstract onAfterloadResource(): void;


  protected actionsForSuccess(resource: T) {
    toastr.success('Solicitação processada com sucesso!');

    const baseComponentPath: string = this.route.snapshot.parent.url[0].path;

    // redirect/reload component page
    this.router.navigateByUrl(baseComponentPath, {skipLocationChange: true}).then(
      () => this.router.navigate([baseComponentPath, resource.id, 'edit'])
    );
  }


  protected actionsForError(error) {
    toastr.error('Ocorreu um erro ao processar a sua solicitação!');

    this.submittingForm = false;

    if (error.status === 422) {
      this.serverErrorMessages = JSON.parse(error._body).errors;
    } else {
      this.serverErrorMessages = ['Falha na comunicação com o servidor. Por favor, tente mais tarde.'];
    }
  }


  protected abstract buildResourceForm(): void;
}
