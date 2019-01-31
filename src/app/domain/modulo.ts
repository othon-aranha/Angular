import { TipoAtualizacao } from './tipo-atualizacao';
import { TipoAplicacao } from './tipo-aplicacao';
import { StatusModulo } from './status-modulo';
import { Tribunal } from './tribunal';
import { Link } from './link';
import { BaseResourceModel } from '../shared/models/base-resource-model';

export class Modulo extends BaseResourceModel {
    constructor (
    public id?: number,
    public sigla?: string,
    public nome?: string,
    public descricao?: string,
    public alias?: string,
    public esquema?: string,
    public caminhoModulo?: string,
    public caminhoHelp?: string,
    public nomeExecutavel?: string,
    public majorVersion?: number,
    public minorVersion?: number,
    public release?: number,
    public build?: number,
    public dataModulo?: Date,
    public dataHelp?: Date,
    public mensagemCompartilhada?: boolean,
    public controlaAcesso?: string,
    public tipoModulo?: TipoAplicacao,
    public tipoAtualizacao?: TipoAtualizacao,
    public statusModulo?: StatusModulo,
    public tribunal?: Tribunal,
    public versao?: string,
    public links?: Link) {
        super();
    }

    static fromJson(jsonData: any): Modulo {
        return Object.assign(new Modulo(), jsonData);
    }
}
