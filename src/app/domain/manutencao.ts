import { Modulo } from './modulo';
import { MaquinaPk } from './maquina-pk';
export class Manutencao {
    id: MaquinaPk;
    modulo: Modulo;
    status: string;
    dataManutencao: Date;
    mensagemErro: string;
    versao: string;
    conexao: String;
    maquina: string;
    instancia: String;
}
