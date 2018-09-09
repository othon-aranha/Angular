import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tribunal } from '../domain/tribunal';

@Injectable()
export class TribunalService {
  tribunalUrl = 'http://localhost:8081/tribunal';

  constructor(private http: HttpClient) { }

  listaTribunais() {
    return this.http.get<Tribunal[]>(this.tribunalUrl + '/tribunais');
  }

  recuperarTribunal(id: string) {
    return this.http.get<Tribunal>(this.tribunalUrl + '/' + id);
  }

}
