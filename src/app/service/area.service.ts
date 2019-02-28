import { Injectable, Injector } from '@angular/core';
import { Area } from '../domain/area';
import { BaseResourceService } from '../shared/services/base-resource-service';

@Injectable({
  providedIn: 'root'
})
export class AreaService extends BaseResourceService<Area> {

  constructor(protected injector: Injector) {
   super('http://localhost:8081/area', injector, Area.fromJson);
  }

  protected getAllSufix(): string {
    return '/areas';
   }
}
