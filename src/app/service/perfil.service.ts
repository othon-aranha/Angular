import { Injectable, Injector } from '@angular/core';
import { Perfil } from '../domain/perfil';
import { BaseResourceService } from '../shared/services/base-resource-service';

@Injectable({
  providedIn: 'root'
})
export class PerfilService extends BaseResourceService<Perfil> {
  constructor(protected injector: Injector) {
   super('http://localhost:8081/perfil', injector, Perfil.fromJson);
  }

  protected getAllSufix(): string {
    return '/perfis';
  }
}
