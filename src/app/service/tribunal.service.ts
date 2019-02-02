import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tribunal } from '../domain/tribunal';
import { BaseResourceService } from '../shared/services/base-resource-service';

@Injectable()
export class TribunalService extends BaseResourceService<Tribunal> {
  tribunalUrl = 'http://localhost:8081/tribunal';

  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(protected injector: Injector) {
    super('http://localhost:8081/tribunal', injector, Tribunal.fromJson);
   }

  listaTribunais() {
    return this.http.get<Tribunal[]>(this.tribunalUrl + '/tribunais', {headers: this.headers});
  }

  recuperarTribunal(id: string) {
    return this.http.get<Tribunal>(this.tribunalUrl + '/' + id, {headers: this.headers});
  }

}
