import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manutencao } from '../domain/manutencao';

@Injectable()
export class ManutencaoService {
  manutencaoUrl = 'http://localhost:8081/manutencao';

  constructor(private http: HttpClient) { }

  listarManutencoesdoModulo(sigla: String) {
    return  this.http.get<Manutencao[]>(this.manutencaoUrl + '/sigla/' + sigla);
  }

}
