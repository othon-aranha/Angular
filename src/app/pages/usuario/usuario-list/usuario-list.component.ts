import { Component, OnInit, Injector } from '@angular/core';
import { MenuItem, Message } from 'primeng/api';
import { Usuario } from '../../../domain/usuario';
import { UsuarioService } from '../../../service/usuario.service';
import { BaseListFormComponent } from '../../../shared/components/base-list-form/base-list-form.component';

interface Status {
  name: string;
  code: string;
}

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})

export class UsuarioListComponent extends BaseListFormComponent<Usuario> implements OnInit {
  cols: any[];
  usuarios = [];
  tipoUsuario = [];
  selectedTipoUsuario = [];
  usuario: Usuario = null;
  selectedUsuario: Usuario = null;
  selectedStatus = [];
  msgs: Message[];
  rota: string;
  displayDialog: boolean;


  constructor(protected usuarioService: UsuarioService, protected injector: Injector) {
    super(injector, new Usuario(), usuarioService, Usuario.fromJson);
  }


  ngOnInit() {

    this.selectedTipoUsuario = ['AVULSO', 'APLICACAO', 'EXTERNO', 'INVALIDO', 'SERVIDOR', 'SISTEMA', 'TERCEIRIZADO'];
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

    this.consultarporTipodeUsuario();

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

  }

  consultarporTipodeUsuario() {
    this.gridrows = [];
    if ( ( this.selectedTipoUsuario.length >  0 ) && ( this.selectedStatus.length === 0 ) ) {
      this.usuarioService.listarUsuariosporTipo(this.selectedTipoUsuario.join()).subscribe(dados => this.gridrows = dados);
    } else if ( ( this.selectedTipoUsuario.length === 0 ) && ( this.selectedStatus.length > 0 ) ) {
      this.usuarioService.listarUsuariosporStatus(this.selectedStatus.join()).subscribe(dados => this.gridrows = dados);
    } else {
      this.usuarioService.listarUsuariosporTipoEStatus(this.selectedTipoUsuario.join(),
      this.selectedStatus.join()).subscribe(dados => this.gridrows = dados);
    }
  }

  onSelecionarTipoUsuario(tipoUsuario: string[]) {
    this.tipoUsuario = tipoUsuario;
    this.consultarporTipodeUsuario();
  }


  onSelecionarStatus(status: string[]) {
    this.selectedStatus = status;
    this.consultarporTipodeUsuario();
  }

  viewUsuario(usuario: Usuario) {

  }

  deleteRegister(tipo: Usuario) {

  }

  viewRegister(tipo: Usuario) {
    // this.rou
  }

}
