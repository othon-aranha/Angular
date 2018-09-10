import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MaquinaServidora } from '../domain/maquina-servidora';

@Injectable()
export class ManutencaoService {
  manutencaoUrl = 'http://localhost:8081/manutencao';

  constructor(private http: HttpClient) { }

  listarManutencoesdoModulo(sigla: String) {
    return  this.http.get<MaquinaServidora[]>(this.manutencaoUrl + '/sigla/' + sigla);
  }

}
