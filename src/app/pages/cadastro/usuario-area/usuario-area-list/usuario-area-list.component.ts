import { Component, OnInit, Injector, Input, OnChanges } from '@angular/core';
import { AreaAtuacao } from '../../../../domain/area-atuacao';
import { BaseListFormComponent } from '../../../../shared/components/base-list-form/base-list-form.component';
import { UsuarioAreaService } from '../../../../service/usuario-area.service';

@Component({
  selector: 'app-usuario-area-list',
  templateUrl: './usuario-area-list.component.html',
  styleUrls: ['./usuario-area-list.component.css']
})
export class UsuarioAreaListComponent extends BaseListFormComponent<AreaAtuacao> implements OnInit, OnChanges {
  AreasAtuacao: Array<AreaAtuacao> = [];

  @Input() loginUsuario: string;

  constructor (protected usuarioAreaService: UsuarioAreaService, protected injector: Injector) {
    super(injector, new AreaAtuacao(), usuarioAreaService, AreaAtuacao.fromJson);
  }

  ngOnInit() {
    this.carregaUsuarioAreas();
  }

  carregaUsuarioAreas() {
    this.usuarioAreaService.getByloginUsuario(this.loginUsuario).subscribe(
      (resource) => this.AreasAtuacao = resource
     );
  }

  ngOnChanges() {
    if ( ( this.loginUsuario !== undefined ) && ( this.loginUsuario !== '' ) ) {
       console.log(this.loginUsuario);
       this.carregaUsuarioAreas();
    }
  }

  cloneRow(m: AreaAtuacao): AreaAtuacao {
    const alias = new AreaAtuacao();
    // tslint:disable-next-line:forin
    for (const prop in m) {
        alias[prop] = m[prop];
    }
    return alias;
   }

}
