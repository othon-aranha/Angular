import { Unidade } from './unidade';

export class Usuario {
    id: number;
    login: String;
    nome: String;
    matriculaServidor: String;
    matriculaFuncionario: String;
    email: String;
    senha: String;
    numeroCpf: String;
    status: String;
    tipo: String;
    unidade: Unidade;
 }
