import { map, catchError } from 'rxjs/operators';
import { Injectable, Injector } from '@angular/core';
import { Area } from '../domain/area';
import { BaseResourceService } from '../shared/services/base-resource-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService extends BaseResourceService<Area> {

  constructor(protected injector: Injector) {
   super('http://localhost:8081/area', injector, Area.fromJson);
  }

  public listarUnidadesIniciadasCom(sigla: string): Observable<Array<Area>> {
      return this.http.get<Array<Area>>(this.apiPath + this.getAllSufix() + '/sigla/' + sigla, {headers: this.headers})
      .pipe(
        map(this.jsonDataToResources.bind(this)),
        catchError(this.handleError)
      );
    }

  protected getAllSufix(): string {
    return '/areas';
   }
}
