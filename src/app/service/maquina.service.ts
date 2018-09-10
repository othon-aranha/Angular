import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ManutencaoService {
  manutencaoUrl = 'http://localhost:8081/alias';

  constructor(private http: HttpClient) { }

  listarMaquinas() {
    return  this.http.get<any[]>(this.manutencaoUrl + '/aliases');
  }

}
