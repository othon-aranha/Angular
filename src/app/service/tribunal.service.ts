import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tribunal } from '../domain/tribunal';

@Injectable()
export class TribunalService {
  tribunalUrl = 'http://localhost:8081/tribunal';

  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private http: HttpClient) { }

  listaTribunais() {
    return this.http.get<Tribunal[]>(this.tribunalUrl + '/tribunais', {headers: this.headers});
  }

  recuperarTribunal(id: string) {
    return this.http.get<Tribunal>(this.tribunalUrl + '/' + id, {headers: this.headers});
  }

}
