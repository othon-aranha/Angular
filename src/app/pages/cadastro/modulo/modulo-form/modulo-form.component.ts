import { MaquinaService } from './../../../../service/maquina.service';
import { ModuloService } from '../../../../service/modulo.service';
import { Component, OnInit, Injector } from '@angular/core';

import { Validators } from '@angular/forms';

import { BaseResourceFormComponent } from '../../../../shared/components/base-resource-form/base-resource-form.component';
import { Modulo } from '../../../../domain/modulo';
import { MaquinaServidora } from '../../../../domain/maquina-servidora';
import { TribunalService } from '../../../../service/tribunal.service';


@Component({
  selector: 'app-modulo-form',
  templateUrl: './modulo-form.component.html',
  styleUrls: ['./modulo-form.component.css']
})
export class ModuloFormComponent extends BaseResourceFormComponent<Modulo> implements OnInit {

  aliasList: any[];
  filteredAlias: any[];
  cdTrib: number;
  siglaModulo: string;
  TipoAplicacao: any[] = [{label: '...', value: ''},
                          {label: 'Desktop', value: 'DESKTOP'},
                          {label: 'Web', value: 'WEB'},
                          {label: 'Híbrida', value: 'HIBRIDA'}];

  TipoAtualizacao: any[] = [{label: '...', value: ''},
                          {label: 'Versão', value: 'POR_VERSAO'},
                          {label: 'Data', value: 'POR_DATA'},
                          {label: 'Não Atualiza', value: 'NAO_ATUALIZA'}];

  constructor(protected moduloService: ModuloService, protected injector: Injector, private maquinaService: MaquinaService,
              private tribunalService: TribunalService ) {
    super(injector, new Modulo(), moduloService, Modulo.fromJson);
  }


  private carregaListaServidores(cdModulo: number) {
    this.aliasList = [];
    this.aliasList = [...this.aliasList, {label: '...' , value: ''}];
    let manutencoes: Array<MaquinaServidora> = [];
    this.maquinaService.listarMaquinas()
    .subscribe(
      (resource) => {
        manutencoes = resource;
        for (let i = 0; i < manutencoes.length; i++) {
          this.aliasList = [...this.aliasList, {label: manutencoes[i].alias , value: manutencoes[i].id}];
        }
      },
      (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
    );
  }

  ngOnInit() {
    // this.cdTrib = this.tribunalService.
    super.getParamId();
    this.carregaListaServidores(this.id);
    super.ngOnInit();
    this.siglaModulo = this.resource.sigla;
    this.cdTrib = 1;
  }

  onSelecionarTribunal(cdTrib: number) {
    this.carregaListaServidores(cdTrib);
  }

  filterAliasSingle(event) {
    const query = event.query;
    this.maquinaService.listarMaquinas().subscribe(
      (resource) => {
        this.filteredAlias = this.filterAlias(query, resource);
    });
  }

  filterAlias(query, aliases: any[]): any[] {
    const filtered: any[] = [];
    for (let i = 0; i < aliases.length; i++) {
        const alias = aliases[i];
        if ( alias.name.toLowerCase().indexOf(query.toLowerCase()) === 0 ) {
            filtered.push(alias);
        }
    }
    return filtered;
}

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id:   [null, [Validators.required, Validators.minLength(1)] ],
      sigla: [null, [Validators.required, Validators.minLength(3)] ],
      alias: [null, [Validators.required, Validators.minLength(1)] ],
      esquema: [null, [Validators.required, Validators.minLength(3)] ],
      versao: [null, [Validators.required, Validators.minLength(7)] ],
      tipoModulo: [null, [Validators.required, Validators.minLength(3)]],
      mensagemCompartilhada: [null,
                            [Validators.required, Validators.minLength(1), Validators.maxLength(1)] ],
      controlaAcesso: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(1)] ]
    });
  }

  onAfterloadResource() {

  }

  protected creationPageTitle(): string {
    return 'Cadastro de Novo Módulo';
  }

  protected editionPageTitle(): string {
    const categoryName = this.resource.id || '';
    return 'Editando Módulo: ' + categoryName;
  }

}
