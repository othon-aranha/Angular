import { Link } from './link';
import { BaseResourceModel } from '../shared/models/base-resource-model';

export class Tribunal extends BaseResourceModel {
    constructor (
    public id?: number,
    public sigla?: string,
    public nome?: string,
    public logradouro?: string,
    public bairro?: string,
    public uf?: string,
    public cep?: string,
    public cidade?: string,
    public telefone?: string,
    public cgc?: string,
    public numeroContrato?: string,
    public descricaoContrato?: string,
    public codigoMunicipioIBGE?: number,
    public codigoNaturezaJuridica?: number,
    public email?: string,
    public acesso?: string,
    public links?: string) {
        super();
    }

    static fromJson(jsonData: any): Tribunal {
        return Object.assign(new Tribunal(), jsonData);
    }
}
