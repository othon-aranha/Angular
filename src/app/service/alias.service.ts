import { map, catchError } from 'rxjs/operators';
import { MaquinaServidora } from './../domain/maquina-servidora';
import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../shared/services/base-resource-service';
import { Observable } from 'rxjs';

@Injectable()
export class AliasService extends BaseResourceService<MaquinaServidora> {

   constructor(protected injector: Injector) {
    super('http://localhost:8081/alias', injector, MaquinaServidora.fromJson);
   }

   protected getAllSufix(): string {
    return '/aliases';
   }

    public getByCompositeId(id: number, alias: string): Observable<MaquinaServidora> {
    const url = `${this.apiPath}/cdTrib/${id}/alias/${alias}`;

    return this.http.get<MaquinaServidora>(url, {headers: this.headers}).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handleError)
    );
  }

  listarMaquinasServidorasdoTribunal(cdTrib: number): Observable<Array<MaquinaServidora>> {
    return this.http.get<Array<MaquinaServidora>>(this.apiPath + '/cdTrib/' + cdTrib, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

}
