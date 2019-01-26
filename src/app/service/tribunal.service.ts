import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tribunal } from '../domain/tribunal';

@Injectable()
export class TribunalService {
  tribunalUrl = 'http://localhost:8081/tribunal';

  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private http: HttpClient) { }

  listaTribunais() {
    return this.http.get<Tribunal[]>(this.tribunalUrl + '/tribunais');
  }

  recuperarTribunal(id: string) {
    return this.http.get<Tribunal>(this.tribunalUrl + '/' + id);
  }

  addTribunal(tribunal: Tribunal) {
    return this.http.post<Tribunal>(this.tribunalUrl, JSON.stringify(tribunal), {headers: this.headers})
   .subscribe((response) => console.log(response));
  }

  updateTribunal(tribunal: Tribunal) {
   return this.http.put<Tribunal>(this.tribunalUrl, JSON.stringify(tribunal), {headers: this.headers})
  .subscribe((response) => console.log(response));
 }

 deleteTribunal(id) {
   return this.http.delete<Tribunal>(this.getTribunalUrl(id), {headers: this.headers})
   .subscribe((response) => console.log(response));
 }

 private getTribunalUrl(id) {
  return this.tribunalUrl + '/' + id;
}
}
