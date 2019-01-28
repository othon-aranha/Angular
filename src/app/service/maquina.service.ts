import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MaquinaServidora } from '../domain/maquina-servidora';

@Injectable()
export class MaquinaService {
  manutencaoUrl = 'http://localhost:8081/alias';

  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');


  constructor(private http: HttpClient) { }

  /* listarMaquinas(): Promise<Array<MaquinaServidora>> {
    // return  this.http.get<any[]>(this.manutencaoUrl + '/aliases', {headers: this.headers}).;
    return new Promise((resolve, reject ) => {
      resolve( this.http.get<Array<MaquinaServidora>>(this.manutencaoUrl + '/aliases', {headers: this.headers}).toPromise() );
    });
  } */

  listarMaquinas() {
    return  this.http.get<any[]>(this.manutencaoUrl + '/aliases', {headers: this.headers});
  }

  listarServidoresdoModulo(cdModulo: number) {
    return  this.http.get<Array<MaquinaServidora>>(this.manutencaoUrl + '/cdModulo/' + cdModulo, {headers: this.headers});
  }

}
