import { Component, OnInit } from '@angular/core';
import { MenuItem, Message } from 'primeng/api';
import { Usuario } from '../domain/usuario';
import { UsuarioService } from '../service/usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  cols: any[];
  usuarios = [];
  tipoUsuario = [];
  usuario: Usuario = null;
  selectedUsuario: Usuario = null;
  items: MenuItem[];
  msgs: Message[];
  displayDialog: boolean;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
        // Colunas da Grid //
        this.cols = [
          {header: 'Id', field: 'id', classe: 'ui'},
          {header: 'Login', field: 'login', classe: 'ui-p-2'},
          {header: 'Nome', field: 'nome', classe: 'ui-p-18'},
          {header: 'Mat. Servidor', field: 'matriculaServidor', classe: 'ui-p-2'},
          {header: 'Mat. Funcionario', field: 'matriculaFuncionario', classe: 'ui-p-2'},
          {header: 'E-mail', field: 'email', classe: 'ui-p-2'},
          {header: 'CPF', field: 'numeroCpf', classe: 'ui-p-2'},
          {header: 'Status', field: 'status', classe: 'ui-p-2'},
          {header: 'Tipo', field: 'tipo', classe: 'ui-p-2'}
      ];

      this.consultarporTipodeUsuario(['AVULSO', 'APLICACAO', 'EXTERNO', 'INVALIDO', 'SERVIDOR', 'SISTEMA', 'TERCEIRIZADO']);
  }


  public consultar() {
    return this.usuarioService.listarUsuarios().subscribe(dados => this.usuarios = dados);
  }

  consultarporTipodeUsuario(tipo: string[]) {
    this.usuarios = [];
    if ( tipo.length === 0 ) {
      return this.usuarioService.listarUsuariosporTipo('').subscribe(dados => this.usuarios = dados);
    } else {
      return this.usuarioService.listarUsuariosporTipo(tipo.join()).subscribe(dados => this.usuarios = dados);
    }
  }


}
