import { Area } from './../../../../domain/area';
import { AreaService } from './../../../../service/area.service';
import { TipoUsuario } from './../../../../domain/tipo-usuario';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Injector } from '@angular/core';
import { Usuario } from '../../../../domain/usuario';
import { BaseResourceFormComponent } from '../../../../shared/components/base-resource-form/base-resource-form.component';
import { UsuarioService } from '../../../../service/usuario.service';
import { ServidorService } from '../../../../service/servidor.service';
import { Servidor } from '../../../../domain/servidor';
import { Unidade } from '../../../../domain/unidade';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent extends BaseResourceFormComponent<Usuario> implements OnInit {

  tipoUsuario = TipoUsuario;
  unidadeList: any[];
  unidades: Array<Area> = [];
  servidor: Servidor = new Servidor();
  unidade: Area;
  unidadeList: any[];
  unidades: Area[] = [];
  situacao: boolean;
  login: string;
  constructor(protected usuarioService: UsuarioService, protected injector: Injector, private servidorService: ServidorService
              , private areaService: AreaService) {
    super(injector, new Usuario(), usuarioService, Usuario.fromJson);
  }

  ngOnInit() {
    this.urlBack = 'usuario';
    this.unidade = new Area();
    this.unidade.sigla = '';
    this.unidade.nome = '';
    this.CarregaDadosUnidade();
    super.ngOnInit();
  }


  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id:    new FormControl( '', [Validators.required, Validators.minLength(1)] ),
      login: new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      nome: new FormControl( '', [Validators.required, Validators.minLength(1)] ),
      matriculaServidor:  new FormControl( '', [Validators.required, Validators.minLength(8)] ),
      matriculaFuncionario:  new FormControl( '', [Validators.minLength(1)] ),
      email:      new FormControl( '', Validators.email ),
      // senha:     new FormControl('',  [Validators.required, Validators.minLength(7)] ),
      numeroCpf: new FormControl( '', [Validators.minLength(3)] ),
      num_tit_eleitor: new FormControl( '', [Validators.minLength(11), Validators.maxLength(11)] ),
      status:  new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      tipo:     new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      // usuarioModulos: new FormControl( '', [Validators.required] ),
<<<<<<< HEAD
<<<<<<< HEAD
      unidade: new FormControl( '', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
      desc_unidade: new FormControl( '', [Validators.required, Validators.minLength(1), Validators.maxLength(130)] )
=======
      unidade: new FormControl( '', [Validators.required] ),
      sigla_unidade: new FormControl( {value: '', disabled: true}, [Validators.required, Validators.minLength(1)] ),
      nome_unidade: new FormControl(  {value: '', disabled: true}, [Validators.required, Validators.minLength(1)] )
>>>>>>> ff44086f0c4e07d773db2a6820063f26e9cbcdb8
=======
      unidade: new FormControl( '', [Validators.required] ),
      sigla_unidade: new FormControl( {value: '', disabled: true}, [Validators.required, Validators.minLength(1)] ),
      nome_unidade: new FormControl(  {value: '', disabled: true}, [Validators.required, Validators.minLength(1)] )
>>>>>>> ff44086f0c4e07d773db2a6820063f26e9cbcdb8
    });
    // this.formBuilder.control('tipoModulo').registerOnChange(this.GerenciaControles);
  }

  onAfterloadResource() {
    this.login = this.resource.login;
    this.resourceForm.get('id').setValue(this.id);
    if ( this.resourceForm.get('unidade').value !== undefined ) {
      this.unidade = this.resourceForm.get('unidade').value;
    }
    this.CarregaNomeUnidade(this.unidade.sigla);
    this.situacao = ( this.resourceForm.get('status').value === 'ATIVO' );
    this.marcaSituacao(this.situacao);
    this.DefineRegraseValidadores(this.resourceForm.get('tipo').value);
    this.CarregaDadosUnidade();
  }

  AtribuiValoresDefault(): void {
      if ( this.resourceForm !== undefined ) {
      const pTipoUsuario: string = this.resourceForm.get('tipo').value;
      this.DefineRegraseValidadores(pTipoUsuario);
      switch (pTipoUsuario) {
        case 'TERCEIRIZADO': {
          this.resourceForm.get('matriculaServidor').setValue(null);
          this.resourceForm.get('nome').setValue(null);
          break;
        }
        case 'SERVIDOR': {
          this.resourceForm.get('matriculaFuncionario').setValue(null);
          this.resourceForm.get('nome').setValue(null);
          break;
        }
        case 'AVULSO': {
          this.resourceForm.get('matriculaServidor').setValue(null);
          this.resourceForm.get('matriculaFuncionario').setValue(null);
          break;
        }
        case 'APLICACAO': {
          this.resourceForm.get('matriculaServidor').setValue(null);
          this.resourceForm.get('matriculaFuncionario').setValue(null);
          this.resourceForm.get('nome').setValue(null);
          break;
        }
      }
    }
  }

  DefineRegraseValidadores(pTipoUsuario: String): void {
    switch (pTipoUsuario) {
      case 'TERCEIRIZADO': {
        this.resourceForm.get('matriculaFuncionario').setValidators([Validators.required, Validators.minLength(2)]);
        this.resourceForm.get('matriculaServidor').clearValidators();
        this.resourceForm.get('nome').setValidators([Validators.required, Validators.minLength(1)]);
        break;
      } case 'SERVIDOR': {
        this.resourceForm.get('matriculaServidor').setValidators([Validators.required, Validators.minLength(8)]);
        this.resourceForm.get('matriculaFuncionario').clearValidators();
        this.resourceForm.get('nome').setValidators([Validators.required, Validators.minLength(1)]);
        break;
      } case 'AVULSO': {
        this.resourceForm.get('matriculaServidor').clearValidators();
        this.resourceForm.get('matriculaServidor').setValue(null);
        this.resourceForm.get('matriculaFuncionario').clearValidators();
        this.resourceForm.get('matriculaFuncionario').setValue(null);
        this.resourceForm.get('nome').setValidators([Validators.required, Validators.minLength(1)]);
        break;
      }  case 'APLICACAO': {
        this.resourceForm.get('matriculaServidor').clearValidators();
        this.resourceForm.get('matriculaFuncionario').clearValidators();
        this.resourceForm.get('nome').clearValidators();
        break;
      }
    }
    this.resourceForm.get('matriculaServidor').updateValueAndValidity();
    this.resourceForm.get('matriculaFuncionario').updateValueAndValidity();
    this.resourceForm.get('nome').updateValueAndValidity();
    this.resourceForm.updateValueAndValidity();
  }


  CarregaDadosServidor(matricula: string) {
    if ( ( matricula !== undefined ) && ( matricula !== '' ) ) {
    this.servidorService.getById(matricula).subscribe(
      (resource) => {
        this.servidor = resource;
        this.resourceForm.get('nome').setValue(this.servidor.nome);
        this.resourceForm.get('numeroCpf').setValue(this.servidor.numeroCpf);
        this.resourceForm.get('email').setValue(this.servidor.email);
      }
    );

    } else if ( ( matricula !== undefined ) && ( matricula === '' ) ) {
      this.limpaDadosServidor();
    }
  }

<<<<<<< HEAD
<<<<<<< HEAD
 buscaAutoCompleteUnidade(termo: string) {
    this.unidadeList = [];
    for (let i = 0; i < this.unidades.length; i++) {
      const alias = this.unidades[i].sigla;
      if ( alias.toLowerCase().indexOf(termo.toLowerCase()) === 0) {
          this.unidadeList.push(alias);
      }
    }
  }


  CarregaDadosUnidade() {
    this.unidade = new Area();
    this.resourceForm.get('unidade').setValue(null);
    this.unidade.nome = '';
    // if ( ( siglaUnidade !== undefined ) && ( siglaUnidade !== '' ) ) {
      this.areaService.getAll().subscribe(
        (resource) => {
          this.unidades = resource;
          // this.resourceForm.get('unidade').setValue(resource);
        }
      );
      // }
      if ( this.unidade.sigla === '' ) {
        this.limpaDadosUnidadeServidor();
=======
  buscaAutoComplete(termo, campo: string) {
    this.unidadeList = [];
    for (let i = 0; i < this.unidades.length; i++) {
      const unidade = this.unidades[i];
      for (const prop in unidade ) {
        if ( ( prop === campo ) && ( unidade[prop].toLowerCase().indexOf(termo.toLowerCase()) === 0 ) ) {
          this.unidadeList.push(unidade[prop]);
        }
=======
  buscaAutoComplete(termo, campo: string) {
    this.unidadeList = [];
    for (let i = 0; i < this.unidades.length; i++) {
      const unidade = this.unidades[i];
      for (const prop in unidade ) {
        if ( ( prop === campo ) && ( unidade[prop].toLowerCase().indexOf(termo.toLowerCase()) === 0 ) ) {
          this.unidadeList.push(unidade[prop]);
        }
>>>>>>> ff44086f0c4e07d773db2a6820063f26e9cbcdb8
      }
    }
  }

  CarregaNomeUnidade(value: string) {
    if ( ( value !== undefined ) && ( value !== '' ) ) {
      this.unidades.forEach((el) => {
        if ( ( el.sigla !== '' ) && ( el.sigla.toLowerCase() === value.toLowerCase() ) ) {
          this.resourceForm.get('nome_unidade').setValue(el.nome);
        }
      });
    }
  }

  CarregaDadosUnidade() {
    this.unidadeList = [];
    this.areaService.getAll().subscribe(
      (resource) => {
        this.unidades = resource;
        if ( resource !== undefined ) {
          this.unidades.forEach((el) => { this.unidadeList = [...this.unidadeList, el.sigla]; });
        }
<<<<<<< HEAD
>>>>>>> ff44086f0c4e07d773db2a6820063f26e9cbcdb8
      }
    );
  }

  preencheDescUnidade(unidade: string) {
    let index = -1;
    this.resourceForm.get('desc_unidade').setValue('');
    for (let i = 0; i < this.unidades.length; i++) {
      const alias = this.unidades[i].sigla;
      if ( alias.toLowerCase().indexOf(unidade.toLowerCase()) === 0) {
        index = i;
        this.resourceForm.get('desc_unidade').setValue(this.unidades[i].nome);
      }
    }
    if ( index === -1 ) {
      this.limpaDadosUnidadeServidor();
    }
  }

  limpaDadosUnidadeServidor() {
<<<<<<< HEAD
    this.unidade.nome = '';
    this.resourceForm.get('desc_unidade').setValue('');
=======
    this.resourceForm.get('nome_unidade').setValue('');
>>>>>>> ff44086f0c4e07d773db2a6820063f26e9cbcdb8
=======
      }
    );
  }

  limpaDadosUnidadeServidor() {
    this.resourceForm.get('nome_unidade').setValue('');
>>>>>>> ff44086f0c4e07d773db2a6820063f26e9cbcdb8
  }

  limpaDadosServidor() {
    this.resourceForm.get('nome').setValue(null);
    this.resourceForm.get('numeroCpf').setValue(null);
    this.resourceForm.get('email').setValue(null);
    if ( ( this.resourceForm.get('tipo').value === 'TERCEIRIZADO') || ( this.resourceForm.get('tipo').value === 'AVULSO') ) {
      this.resourceForm.get('matriculaFuncionario').setValue(null);
    }

    if ( ( this.resourceForm.get('tipo').value === 'SERVIDOR') || ( this.resourceForm.get('tipo').value === 'AVULSO') ) {
      this.resourceForm.get('matriculaServidor').setValue(null);
    }
  }

  marcaSituacao(value: boolean): void {
    if ( value ) {
      this.resourceForm.get('status').setValue('ATIVO');
    } else {
      this.resourceForm.get('status').setValue('INATIVO');
    }
  }

  tabChange(e) {
    const index = e.index;
    console.log(e.index + this.resource.login.toString());
    this.login = this.resource.login.toString();
}

}
