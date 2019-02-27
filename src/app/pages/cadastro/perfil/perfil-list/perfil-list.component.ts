import { Component, OnInit, Injector } from '@angular/core';
import { Perfil } from '../../../../domain/perfil';
import { BaseListFormComponent } from '../../../../shared/components/base-list-form/base-list-form.component';
import { PerfilService } from '../../../../service/perfil.service';

@Component({
  selector: 'app-perfil-list',
  templateUrl: './perfil-list.component.html',
  styleUrls: ['./perfil-list.component.css']
})
export class PerfilListComponent extends BaseListFormComponent<Perfil> implements OnInit {

  constructor (protected perfilService: PerfilService, protected injector: Injector) {
    super(injector, new Perfil(), perfilService, Perfil.fromJson);
  }

  ngOnInit() {
    // Colunas da Grid //
    this.cols = [
        {header: 'Id', field: 'id', classe: 'ui'},
        {header: 'Nome', field: 'nome', classe: 'ui-p-2'}
    ];

    // Itens do popup menu //
    this.items = [
      { label: 'Editar', icon: 'fa-search', command: (event) => this.viewPerfil(this.selectedrow) },
      { label: 'Novo', icon: 'fa-search', command: (event) => this.newPerfil() },
      { label: 'Excluir', icon: 'fa-close', command: (event) => this.deletePerfil(this.selectedrow) }
    ];

    super.ngOnInit();
  }

  viewPerfil(perfil: Perfil) {
    this.router.navigate(['/perfil/', perfil.id, 'edit']);
  }

  newPerfil() {
    this.router.navigate(['/perfil/', 'new']);
  }

  deletePerfil(perfil: Perfil) {
    //
  }

}
