import { Component, OnInit, Injector } from '@angular/core';
import { Perfil } from '../../../../domain/perfil';
import { BaseResourceFormComponent } from '../../../../shared/components/base-resource-form/base-resource-form.component';
import { PerfilService } from '../../../../service/perfil.service';
import { FormControl, Validators } from '@angular/forms';
import { Modulo } from '../../../../domain/modulo';
import { ModuloService } from '../../../../service/modulo.service';

@Component({
  selector: 'app-perfil-form',
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.css']
})
export class PerfilFormComponent extends BaseResourceFormComponent<Perfil> implements OnInit {
  moduloList: any[];
  modulos: Array<Modulo> = [];
  constructor(protected perfilService: PerfilService, protected injector: Injector, protected moduloService: ModuloService) {
    super(injector, new Perfil(), perfilService, Perfil.fromJson);
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: new FormControl(this.id, [Validators.required, Validators.minLength(1)] ),
      nome: new FormControl(this.resource.nome, [Validators.required, Validators.minLength(6)] ),
      modulo: new FormControl(this.resource.modulo, [Validators.required] ),
      nomeModulo: new FormControl({value: '', disable: true}, [Validators.minLength(3)] )
    });
  }

  ngOnInit() {
    this.urlBack = '/perfil';
    super.ngOnInit();
  }

  onAfterloadResource() {

  }

  carregaListaModulos() {
    this.moduloList = [];
    this.moduloService.getAll().subscribe(
      (resource) => {
        this.modulos = resource;
        if ( resource !== undefined ) {
          this.modulos.forEach((el) => { this.moduloList = [...this.moduloList, el.sigla]; });
        }
      }
    );
  }

  buscaAutoComplete(termo, campo: string) {
    this.moduloList = [];
    for (let i = 0; i < this.modulos.length; i++) {
      const modulo = this.modulos[i];
      for (const prop in modulo ) {
        if ( ( prop === campo ) && ( modulo[prop].toLowerCase().indexOf(termo.toLowerCase()) === 0 ) ) {
          this.moduloList.push(modulo[prop]);
        }
      }
    }
  }

  limpaDadosModulo() {
    this.resourceForm.get('modulo').setValue('');
  }

}
