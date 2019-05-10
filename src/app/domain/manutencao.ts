import { Modulo } from './modulo';
import { MaquinaPk } from './maquina-pk';
import { MaquinaServidora } from './maquina-servidora';
export class Manutencao {
    id: number;
    status: string;
    dataManutencao: Date;
    mensagemErro: string;
    versao: string;
    conexao: String;
    maquina: string;
    instancia: String;
    maquinaServidora: MaquinaServidora;
    modulo: Modulo;
}
