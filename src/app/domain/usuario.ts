import { Modulo } from './modulo';
import { Unidade } from './unidade';
import { Link } from './link';

export class Usuario {
    id: number;
    login: string;
    nome: string;
    matriculaServidor: string;
    matriculaFuncionario: string;
    email: string;
    senha: string;
    numeroCpf: string;
    status: string;
    tipo: string;
    usuarioModulos: Modulo[];
    unidade: Unidade;
    links: Link;

    static fromJson(jsonData: any): Usuario {
        return Object.assign(new Usuario, jsonData);
    }
 }
