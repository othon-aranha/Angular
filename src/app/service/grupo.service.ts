import { map, catchError } from 'rxjs/operators';
import { Injectable, Injector } from '@angular/core';
import { Grupo } from '../domain/grupo';
import { BaseResourceService } from '../shared/services/base-resource-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrupoService extends BaseResourceService<Grupo> {


  constructor(protected injector: Injector) {
   super('http://localhost:8081/grupo', injector, Grupo.fromJson);
  }

  protected getAllSufix(): string {
    return '/grupos';
  }

  listarGruposporSiglaUnidade(sigla: string): Observable<Array<Grupo>> {
    return this.http.get<Array<Grupo>>(this.apiPath + this.getAllSufix() + '/sigla/' + sigla, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

}
