import { TipoUsuario } from './../../../../domain/tipo-usuario';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Injector } from '@angular/core';
import { Usuario } from '../../../../domain/usuario';
import { BaseResourceFormComponent } from '../../../../shared/components/base-resource-form/base-resource-form.component';
import { UsuarioService } from '../../../../service/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent extends BaseResourceFormComponent<Usuario> implements OnInit {

  tipoUsuario: TipoUsuario;
  constructor(protected usuarioService: UsuarioService, protected injector: Injector) {
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
      matriculaServidor:  new FormControl( '', [Validators.required, Validators.minLength(1)] ),
      matriculaFuncionario:  new FormControl( '', [Validators.required, Validators.minLength(1)] ),
      email:      new FormControl( '', Validators.email ),
      senha:     new FormControl('',  [Validators.required, Validators.minLength(7)] ),
      numeroCpf: new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      StatusUsuario:  new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      TipoUsuario:     new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      // usuarioModulos: new FormControl( '', [Validators.required] ),
      unidade: new FormControl( '', [Validators.required, Validators.minLength(1), Validators.maxLength(1)] )
    });
    // this.formBuilder.control('tipoModulo').registerOnChange(this.GerenciaControles);
  }


  onAfterloadResource() {

  }  

}
