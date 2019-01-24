import { TipoAtualizacao } from '../domain/tipo-atualizacao';
import { TipoAplicacao } from '../domain/tipo-aplicacao';
import { StatusModulo } from '../domain/status-modulo';

export class ModuloDTO {
    id: number;
    sigla: string;
    nome: string;
    mensagemCompartilhada: boolean;
    controlaAcesso: string;
    tipoModulo: string[];
    tipoAtualizacao: string[];
    statusModulo: string[];
}
