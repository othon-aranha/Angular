import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TribunalService {
  tribunalUrl = 'http://localhost:8081/tribunal';

  constructor(private http: HttpClient) { }

  retornaTribunalPadrao() {
    return this.http.get<any[]>(this.tribunalUrl);
  }

}
