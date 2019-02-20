import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tribunal } from '../domain/tribunal';
import { BaseResourceService } from '../shared/services/base-resource-service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class TribunalService extends BaseResourceService<Tribunal> {

  constructor(protected injector: Injector) {
    super('http://localhost:8081/tribunal', injector, Tribunal.fromJson);
   }

  listaTribunais() {
    return this.http.get<Tribunal[]>(this.apiPath + '/tribunais', {headers: this.headers});
  }

  recuperarTribunal(id: string) {
    return this.http.get<Tribunal>(this.apiPath + '/' + id, {headers: this.headers});
  }

  recuperarTribunalLocal(): Observable<Tribunal> {
    // return this.http.get<Tribunal>(this.apiPath + '/local' , {headers: this.headers});
    return this.http.get(this.apiPath + '/local' , {headers: this.headers}).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handleError)
    );
  }


}
