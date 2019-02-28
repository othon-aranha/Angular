import { TipoArea } from './tipo-area';

export class Area {
    id: number;
    sigla: string;
    nome: string;
    email: string;
    status: boolean;
    zona: boolean;
    numeroZona: number;
    tipo: TipoArea;
    gerentes: any[];

    static fromJson(jsonData: any): Area {
        return Object.assign(new Area(), jsonData);
    }
}
