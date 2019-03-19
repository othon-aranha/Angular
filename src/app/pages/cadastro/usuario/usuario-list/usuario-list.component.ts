import { Component, OnInit } from '@angular/core';
import { MenuItem, Message } from 'primeng/api';
import { Usuario } from '../../../../domain/usuario';
import { UsuarioService } from '../../../../service/usuario.service';
import { Router } from '@angular/router';

interface Status {
  name: string;
  code: string;
}

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})

export class UsuarioListComponent implements OnInit {
  cols: any[];
  usuarios = [];
  tipoUsuario = [];
  selectedTipoUsuario: string[] = ['AVULSO', 'APLICACAO', 'EXTERNO', 'INVALIDO', 'SERVIDOR', 'SISTEMA', 'TERCEIRIZADO'];
  usuario: Usuario = null;
  selectedUsuario: Usuario = null;
  selectedStatus = [];
  items: MenuItem[];
  msgs: Message[];
  rota: string;
  displayDialog: boolean;


  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {

    this.selectedStatus = ['ATIVO', 'INATIVO'];

    this.tipoUsuario = [
      {label: 'Avulso', value: 'AVULSO'},
      {label: 'Aplicação', value: 'APLICACAO'},
      {label: 'Externo', value: 'EXTERNO'},
      {label: 'Inválido', value: 'INVALIDO'},
      {label: 'Servidor', value: 'SERVIDOR'},
      {label: 'Sistema', value: 'SISTEMA'},
      {label: 'Terceirizado', value: 'TERCEIRIZADO'}
    ];

    this.rota = 'Usuário';

    this.consultarporTipodeUsuario(this.selectedTipoUsuario, this.selectedStatus);

    // Colunas da Grid //
    this.cols = [
      {header: 'Id', field: 'id', classe: 'ui'},
      {header: 'Login', field: 'login', classe: 'ui-p-2'},
      {header: 'Nome', field: 'nome', classe: 'ui-p-8'},
      {header: 'Mat. Servidor', field: 'matriculaServidor', classe: 'ui-p-1'},
      {header: 'Mat. Terceirizado', field: 'matriculaFuncionario', classe: 'ui-p-1'},
      {header: 'Email', field: 'email', classe: 'ui-p-2'},
      {header: 'Tipo de Usuário', field: 'tipo', classe: 'ui-p-2'},
      {header: 'Lotação', field: 'unidade.sigla', classe: 'ui-p-2'},
      {header: 'Status', field: 'status', classe: 'ui-p-2'}
  ];

  // Itens do popup menu //
  this.items = [
    { label: 'Editar', icon: 'fas fa-edit', command: (event) => this.viewUsuario(this.selectedUsuario) },
    { label: 'Novo', icon: 'fas fa-plus-square', command: (event) => this.newUsuario() },
    { label: 'Excluir', icon: 'fa-close', command: (event) => this.deleteUsuario(this.selectedUsuario) }
  ];

  }

  consultarporTipodeUsuario(tipo: string[], status: string[]) {
    this.usuarios = [];
    if ( ( tipo.length !== 0 ) && ( status.length === 0 ) ) {
      return this.usuarioService.listarUsuariosporTipo('').subscribe(dados => this.usuarios = dados);
    } else {
      return this.usuarioService.listarUsuariosporTipoEStatus(tipo.join(), status.join()).subscribe(dados => this.usuarios = dados);
    }
  }

  onSelecionarTipoUsuario(tipoUsuario: string[]) {
    this.tipoUsuario = tipoUsuario;
    this.consultarporTipodeUsuario(this.tipoUsuario, this.selectedStatus);
  }


  onSelecionarStatus(status: string[]) {
    this.selectedStatus = status;
    this.consultarporTipodeUsuario(this.tipoUsuario, this.selectedStatus);
  }

  viewUsuario(usuario: Usuario) {
    this.router.navigate(['/usuario/', usuario.id, 'edit']);
  }

  deleteUsuario(usuario: Usuario) {

  }

  newUsuario() {
    //
  }

}
