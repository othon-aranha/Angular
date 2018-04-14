import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MaquinaServidora } from '../domain/maquina-servidora';

@Injectable()
export class ServidorService {
  servidorUrl = 'http://localhost:8081/alias';

  constructor(private http: HttpClient) { }

  listarServidores() {
    return this.http.get<MaquinaServidora[]>(this.servidorUrl + '/aliases');
  }

}
