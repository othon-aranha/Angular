import { Link } from './link';
import { BaseResourceModel } from '../shared/models/base-resource-model';

export class Dominio extends BaseResourceModel {
    id: number;
    nome: string;
    cd: string;
    descricao: string;
    links: Link;

    static fromJson(jsonData: any): Dominio {
        return Object.assign(new Dominio(), jsonData);
    }
}
