import { MaquinaPk} from './maquina-pk';
export class MaquinaServidora {
    id: MaquinaPk;
    descricao: string;
    usuario: string;
    senha: string;
    conexao: string;
    links: string[];
}
