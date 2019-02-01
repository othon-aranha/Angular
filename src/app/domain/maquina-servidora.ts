import { MaquinaPk} from './maquina-pk';

export class MaquinaServidora  {
    constructor (
    public id?: MaquinaPk,
    public descricao?: string,
    public usuario?: string,
    public senha?: string,
    public conexao?: string,
    public links?: string[]) {
    }

    static fromJson(jsonData: any): MaquinaServidora {
        return Object.assign(new MaquinaServidora(), jsonData);
    }
}
