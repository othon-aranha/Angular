import { BaseResourceModel } from '../shared/models/base-resource-model';

export class Servidor extends BaseResourceModel {
  id: string;
  nome: string;
  email: string;
  matricula: string;
  numeroCpf: string;
  idSituFuncional: number;
  idUnidade: number;
  static fromJson(jsonData: any): Servidor {
    return Object.assign(new Servidor, jsonData);
}
  }
