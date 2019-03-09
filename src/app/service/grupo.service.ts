import { Injectable, Injector } from '@angular/core';
import { Grupo } from '../domain/grupo';
import { BaseResourceService } from '../shared/services/base-resource-service';

@Injectable({
  providedIn: 'root'
})
export class GrupoService extends BaseResourceService<Grupo> {


  constructor(protected injector: Injector) {
   super('http://localhost:8081/grupo', injector, Grupo.fromJson);   
  }

  protected getAllSufix(): string {
    return 'grupos';
  }

}
