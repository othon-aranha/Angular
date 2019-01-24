import { TipoAtualizacao } from '../domain/tipo-atualizacao';
import { TipoAplicacao } from '../domain/tipo-aplicacao';
import { StatusModulo } from '../domain/status-modulo';

export class ModuloDTO {
    id: number;
    sigla: string;
    nome: string;
    nomeExecutavel: string;
    mensagemCompartilhada: boolean;
    controlaAcesso: string;
    tipoModulo: TipoAplicacao[];
    tipoAtualizacao: TipoAtualizacao[];
    statusModulo: StatusModulo[];
    versao: string;
}
