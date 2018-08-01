export class Unidade {
    id: number;
    sigla: string;
    nome: string;
    status: string;
    bairro: string;
    pai: Unidade;
    filhos: Unidade[];
}
