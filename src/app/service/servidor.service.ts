import { Injectable, Injector } from '@angular/core';
import { Servidor } from '../domain/servidor';
import { BaseResourceService } from '../shared/services/base-resource-service';

@Injectable({
  providedIn: 'root'
})
export class ServidorService extends BaseResourceService<Servidor> {

  constructor(protected injector: Injector) {
    super('http://localhost:8080/servidor', injector, Servidor.fromJson);
   }

   protected getAllSufix(): string {
     return '/servidores';
   }
}
