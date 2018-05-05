import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServidorService {
  servidorUrl = 'http://localhost:8081/alias';

  constructor(private http: HttpClient) { }

  listarServidoresdoTribunal(cdTrib: number) {
    return this.http.get<any[]>(this.servidorUrl + '/cdTrib/' + cdTrib);
  }

}
