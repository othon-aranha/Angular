import { TipoArea } from './tipo-area';
import { Usuario } from './usuario';
import { Area } from './area';

export class AreaAtuacao {
    id: number;
    padrao: string;
    area: Area;
    usuario: Usuario;

    static fromJson(jsonData: any): AreaAtuacao {
        return Object.assign(new AreaAtuacao(), jsonData);
    }
}
