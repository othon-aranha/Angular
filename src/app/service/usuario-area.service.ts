import { Injectable, Injector } from '@angular/core';
import { AreaAtuacao } from '../domain/area-atuacao';
import { BaseResourceService } from '../shared/services/base-resource-service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAreaService extends BaseResourceService<AreaAtuacao> {

  constructor(protected injector: Injector) {
    super('http://localhost:8081/usuarioarea', injector, AreaAtuacao.fromJson);
   }

   protected getAllSufix(): string {
     return '/usuarioareas';
   }

   getByloginUsuario(login: string): Observable<AreaAtuacao[]> {
    return this.http.get<AreaAtuacao[]>(this.apiPath + this.getAllSufix() + '/login/' + login, {headers: this.headers}).pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }
}
