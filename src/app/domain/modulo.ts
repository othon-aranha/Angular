import { TipoAtualizacao } from './tipo-atualizacao';
import { TipoAplicacao } from './tipo-aplicacao';
import { StatusModulo } from './status-modulo';
import { Tribunal } from './tribunal';

export class Modulo {
    id: number;
    sigla: string;
    nome: string;
    descricao: string;
    alias: string;
    esquema: string;
    caminhoModulo: string;
    caminhoHelp: string;
    nomeExecutavel: string;
    majorVersion: number;
    minorVersion: number;
    release: number;
    build: number;
    dataModulo: Date;
    dataHelp: Date;
    mensagemCompartilhada: boolean;
    controlaAcesso: string;
    tipoModulo: TipoAplicacao;
    tipoAtualizacao: TipoAtualizacao;
    statusModulo: StatusModulo;
    tribunal: Tribunal;
    versao: string;
}
