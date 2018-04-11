import { Modulo } from './modulo';
import { MaquinaPk } from './maquina-pk';
export class Manutencao {
    id: MaquinaPk;
    modulo: Modulo;
    status: string[1];
    dataManutencao: Date;
    mensagemErro: string;
    versao: string;
    conexao: String;
    maquina: string;
    instancia: String;
}
