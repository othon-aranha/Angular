import { Area } from './area';
import { BaseResourceModel } from '../shared/models/base-resource-model';
export class Grupo extends BaseResourceModel  {
    id: number;
    nome: string;
    area: Area;

    static fromJson(jsonData: any): Grupo {
        return Object.assign(new Grupo, jsonData);
    }
}

