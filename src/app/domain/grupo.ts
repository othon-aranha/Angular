import { Area } from './area';

export class Grupo {
    id: number;
    nome: string;
    area: Area;

    static fromJson(jsonData: any): Grupo {
        return Object.assign(new Grupo(), jsonData);
    }
}
