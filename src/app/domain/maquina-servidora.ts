import { MaquinaPk} from './maquina-pk';
import { BaseResourceModel } from '../shared/models/base-resource-model';
import { Tribunal } from './tribunal';

export class MaquinaServidora extends BaseResourceModel {
    id?: MaquinaPk;
    // tribunal: Tribunal;
    alias: string;
    descricao: string;
    usuario: string;
    senha: string;
    conexao: string;
    links: string[];

    static fromJson(jsonData: any): MaquinaServidora {
        return Object.assign(new MaquinaServidora, jsonData);
    }
}
