export class Area {
    id: number;
    sigla: string;
    nome: string;
    email: string;
    status: boolean;

    static fromJson(jsonData: any): Area {
        return Object.assign(new Area(), jsonData);
    }
}
