import { TipoUsuario } from './../../../../domain/tipo-usuario';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Injector } from '@angular/core';
import { Usuario } from '../../../../domain/usuario';
import { BaseResourceFormComponent } from '../../../../shared/components/base-resource-form/base-resource-form.component';
import { UsuarioService } from '../../../../service/usuario.service';
import { ServidorService } from '../../../../service/servidor.service';
import { Servidor } from '../../../../domain/servidor';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent extends BaseResourceFormComponent<Usuario> implements OnInit {

  tipoUsuario = TipoUsuario;
  servidor: Servidor = new Servidor();
  constructor(protected usuarioService: UsuarioService, protected injector: Injector, private servidorService: ServidorService) {
    super(injector, new Usuario(), usuarioService, Usuario.fromJson);
  }

  ngOnInit() {
    super.ngOnInit();
  }


  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id:    new FormControl( '', [Validators.required, Validators.minLength(1)] ),
      login: new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      nome: new FormControl( '', [Validators.required, Validators.minLength(1)] ),
      matriculaServidor:  new FormControl( '', [Validators.required, Validators.minLength(8)] ),
      matriculaFuncionario:  new FormControl( '', [Validators.required, Validators.minLength(1)] ),
      email:      new FormControl( '', Validators.email ),
      senha:     new FormControl('',  [Validators.required, Validators.minLength(7)] ),
      numeroCpf: new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      status:  new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      tipo:     new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      // usuarioModulos: new FormControl( '', [Validators.required] ),
      unidade: new FormControl( '', [Validators.required, Validators.minLength(1), Validators.maxLength(1)] )
    });
    // this.formBuilder.control('tipoModulo').registerOnChange(this.GerenciaControles);
  }

  onAfterloadResource() {

  }

  GerenciaControles(): void {
    if ( this.resourceForm !== undefined ) {
      if ( this.resourceForm.get('tipo').value === 'TERCEIRIZADO') {
        this.resourceForm.get('matriculaFuncionario').setValidators([Validators.required, Validators.minLength(2)]);
        this.resourceForm.get('matriculaServidor').clearValidators();
        this.resourceForm.get('matriculaServidor').setValue(null);
        this.resourceForm.get('nome').setValue(null);
      } else if ( this.resourceForm.get('tipo').value === 'SERVIDOR') {
        this.resourceForm.get('matriculaServidor').setValidators([Validators.required, Validators.minLength(8)]);
        this.resourceForm.get('matriculaFuncionario').clearValidators();
        this.resourceForm.get('matriculaFuncionario').setValue(null);
        this.resourceForm.get('nome').setValue(null);
      } else if ( this.resourceForm.get('tipo').value === 'AVULSO') {
        this.resourceForm.get('matriculaServidor').clearValidators();
        this.resourceForm.get('matriculaFuncionario').clearValidators();
        this.resourceForm.get('matriculaServidor').setValue(null);
        this.resourceForm.get('matriculaFuncionario').setValue(null);
        this.resourceForm.get('nome').setValue(null);
      }
      this.resourceForm.get('alias').updateValueAndValidity();
    }
  }

  CarregaDadosServidor(matricula: string) {
    if ( ( matricula !== undefined ) && ( matricula !== '' ) ) {
    this.servidorService.getById(matricula).subscribe(
      (resource) => {
        this.servidor = resource;
        this.resourceForm.get('nome').setValue(this.servidor.nome);
        this.resourceForm.get('numeroCpf').setValue(this.servidor.numeroCpf);
        this.resourceForm.get('email').setValue(this.servidor.email);
      },
      (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
    );

    } else if ( ( matricula !== undefined ) && ( matricula === '' ) ) {
      this.limpaDadosServidor();
    }
  }

  limpaDadosServidor() {
    this.resourceForm.get('nome').setValue(null);
    this.resourceForm.get('numeroCpf').setValue(null);
    this.resourceForm.get('email').setValue(null);
    if ( ( this.resourceForm.get('tipo').value === 'TERCEIRIZADO') || ( this.resourceForm.get('tipo').value === 'AVULSO') ) {
      this.resourceForm.get('matriculaFuncionario').setValue(null);
    } else if( ( this.resourceForm.get('tipo').value === 'SERVIDOR') || ( this.resourceForm.get('tipo').value === 'AVULSO') ) {
      this.resourceForm.get('matriculaServidor').setValue(null);
    }
  }

}
