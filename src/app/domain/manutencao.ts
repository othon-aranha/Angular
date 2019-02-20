import { Modulo } from './modulo';
import { MaquinaPk } from './maquina-pk';
import { MaquinaServidora } from './maquina-servidora';
export class Manutencao {
    id: number;
    maquinaServidora: MaquinaServidora;
    modulo: Modulo;
    status: string;
    dataManutencao: Date;
    mensagemErro: string;
    versao: string;
    conexao: String;
    maquina: string;
    instancia: String;
}
