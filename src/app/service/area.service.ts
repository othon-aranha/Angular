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

  public recuperarUnidadepelaSigla(sigla: string): Observable<Area> {
    return this.http.get<Area>(this.apiPath + '/sigla/' + sigla, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handleError)
    );
  }

  public listarUnidadesAtivas(status: boolean): Observable<Array<Area>> {
    return this.http.get<Array<Area>>(this.apiPath + this.getAllSufix() + '/status/' + status, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
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
