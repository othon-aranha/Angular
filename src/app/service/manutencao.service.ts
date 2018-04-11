import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ManutencaoService {
  servidorUrl = 'http://localhost:8081/manutencao';

  constructor(private http: HttpClient) { }

  listarManutencoes(sigla: String) {
    return this.http.get<any[]>(this.servidorUrl + '/sigla/' + sigla);
  }

}
