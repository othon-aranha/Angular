import { Modulo } from './modulo';
export class Perfil {
    id: string;
    nome: string;
    modulo: Modulo;

    static fromJson(jsonData: any): Perfil {
        return Object.assign(new Perfil(), jsonData);
    }
}
