import { map, catchError } from 'rxjs/operators';
import { MaquinaServidora } from './../domain/maquina-servidora';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseResourceService } from '../shared/services/base-resource-service';
import { Observable } from 'rxjs';

@Injectable()
export class AliasService extends BaseResourceService<MaquinaServidora> {
   constructor(protected injector: Injector) {
    super('http://localhost:8081/alias', injector, MaquinaServidora.fromJson);
   }

  listarServidoresdoTribunal(cdTrib: number): Observable<Array<MaquinaServidora>> {
    return this.http.get<Array<MaquinaServidora>>(this.apiPath + '/cdTrib/' + cdTrib, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

}
