export class Area {
    id: string;
    nome: string;
    email: string;
    status: boolean;
    zona: boolean;
    numeroZona: number;
    tipo: string;
    links: string;

    static fromJson(jsonData: any): Area {
        return Object.assign(new Area(), jsonData);
    }
}
