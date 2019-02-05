import { Link } from './link';
import { BaseResourceModel } from '../shared/models/base-resource-model';

export class Tribunal extends BaseResourceModel {
    id: number;
    sigla: string;
    nome: string;
    logradouro: string;
    bairro: string;
    uf: string;
    cep: string;
    cidade: string;
    telefone: string;
    cgc: string;
    numeroContrato: string;
    descricaoContrato: string;
    codigoMunicipioIBGE: number;
    codigoNaturezaJuridica: number;
    email: string;
    acesso: string;
    links: string;

    static fromJson(jsonData: any): Tribunal {
        return Object.assign(new Tribunal, jsonData);
    }
}
