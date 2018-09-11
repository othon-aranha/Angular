import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MaquinaServidora } from '../domain/maquina-servidora';

@Injectable()
export class MaquinaService {
  manutencaoUrl = 'http://localhost:8081/alias';

  constructor(private http: HttpClient) { }

  listarMaquinas() {
    return  this.http.get<MaquinaServidora[]>(this.manutencaoUrl + '/aliases');
  }

  listarServidoresdoModulo(cdModulo: number) {
    return  this.http.get<MaquinaServidora[]>(this.manutencaoUrl + '/cdModulo/' + cdModulo);
  }

}
