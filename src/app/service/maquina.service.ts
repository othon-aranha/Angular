import { MaquinaServidora } from './../domain/maquina-servidora';
import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class MaquinaService  {
  manutencaoUrl = 'http://localhost:8081/alias';

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient
  ) {

  }


  listarMaquinas(): Observable<Array<MaquinaServidora>> {
    return  this.http.get<any[]>(this.manutencaoUrl + '/aliases', {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
    /* return new Promise((resolve, reject ) => {
      resolve( this.http.get<Array<MaquinaServidora>>(this.manutencaoUrl + '/aliases', {headers: this.headers}).toPromise() );
    }); */
  }

  listarServidoresdoModulo(cdModulo: number): Observable<Array<MaquinaServidora>> {
    return  this.http.get<Array<MaquinaServidora>>(this.manutencaoUrl + '/cdModulo/' + cdModulo, {headers: this.headers})
    .pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

    // Métodos protegidos

    protected jsonDataToResources(jsonData: any[]): MaquinaServidora[] {
      const resources: MaquinaServidora[] = [];
      jsonData.forEach(
        element => resources.push( MaquinaServidora.fromJson(element) )
      );
      return resources;
    }

    protected jsonDataToResource(jsonData: any): MaquinaServidora {
      return MaquinaServidora.fromJson(jsonData);
    }

    protected handleError(error: any): Observable<any> {
      console.log('ERRO NA REQUISIÇÃO => ', error);
      return throwError(error);
    }

}
