import { MaquinaPk} from './maquina-pk';
import { BaseResourceModel } from '../shared/models/base-resource-model';

export class MaquinaServidora extends BaseResourceModel {
    chave: MaquinaPk;
    descricao: string;
    usuario: string;
    senha: string;
    conexao: string;
    links: string[];

    static fromJson(jsonData: any): MaquinaServidora {
        return Object.assign(new MaquinaServidora, jsonData);
    }
}
