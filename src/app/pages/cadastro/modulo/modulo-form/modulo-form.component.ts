
import { MaquinaService } from './../../../../service/maquina.service';
import { ModuloService } from '../../../../service/modulo.service';
import { Component, OnInit, Injector } from '@angular/core';

import { Validators, FormControl, FormGroup } from '@angular/forms';

import { BaseResourceFormComponent } from '../../../../shared/components/base-resource-form/base-resource-form.component';
import { Modulo } from '../../../../domain/modulo';
import { MaquinaServidora } from '../../../../domain/maquina-servidora';
import { TribunalService } from '../../../../service/tribunal.service';

import { Tribunal } from '../../../../domain/tribunal';
import { Observable } from 'rxjs';
import { map, startWith, toArray } from 'rxjs/operators';


@Component({
  selector: 'app-modulo-form',
  templateUrl: './modulo-form.component.html',
  styleUrls: ['./modulo-form.component.css']
})
export class ModuloFormComponent extends BaseResourceFormComponent<Modulo> implements OnInit {

  aliasList: any[];
  aliases: string[] = [];
  cdTrib: number;
  siglaModulo: string;
  ctrlsAtualizacao: boolean;
  bcontrolaAcesso: boolean;
  controlaVersao: boolean;
  controlaAtualizacao: boolean;
  autoControl = new FormControl();


  TipoAplicacao: any[] = [{label: 'Desktop', value: 'DESKTOP'},
                          {label: 'Web', value: 'WEB'},
                          {label: 'Híbrida', value: 'HIBRIDA'}];

  TipoAtualizacao: any[] = [{label: 'Versão', value: 'POR_VERSAO'},
                            {label: 'Data', value: 'POR_DATA'},
                            {label: 'Não Atualiza', value: 'NAO_ATUALIZA'}];

  StatusModulo: any[] = [{label: 'Desenvolvimento', value: 'DESENVOLVIMENT'},
                         {label: 'Homologação', value: 'HOMOLOGACAO'},
                         {label: 'Produção', value: 'PRODUCAO'}];

  constructor(protected moduloService: ModuloService, protected injector: Injector, private maquinaService: MaquinaService,
              private tribunalService: TribunalService ) {
    super(injector, new Modulo(), moduloService, Modulo.fromJson);
  }


/*  private carregaListaServidores(cdModulo: number) {
    this.aliasList = [];
    this.aliasList = [...this.aliasList, {label: '...' , value: ''}];
    let manutencoes: Array<MaquinaServidora> = [];
    this.maquinaService.listarMaquinas()
    .subscribe(
      (resource) => {
        manutencoes = resource;
        for (let i = 1; i < manutencoes.length; i++) {
          this.aliasList = [...this.aliasList, {label: manutencoes[i].id.alias , value: manutencoes[i].id.alias}];
        }
      },
      (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
    );
  }
  */

  ngOnInit() {
    this.urlBack = '/modulo';
    // this.cdTrib = this.tribunalService.
    super.ngOnInit();
    this.carregaAliases();
  }

  buscaAutoComplete(termo: string) {
    this.aliasList = [];
    for (let i = 0; i < this.aliases.length; i++) {
      const alias = this.aliases[i];
      if (alias.toLowerCase().indexOf(termo.toLowerCase()) === 0) {
          this.aliasList.push(alias);
      }
    }
  }

  carregaAliases() {
    let manutencoes: Array<MaquinaServidora> = [];
    // let stermo: string;

    // this.maquinaService.listarServidoresdoModuloQContenham(stermo)
    this.maquinaService.listarMaquinas()
    .subscribe(
      (resource) => {
        manutencoes = resource;
        manutencoes.forEach((el) => { this.aliases = [...this.aliases, el.alias]; });
       /* for (let i = 0; i < manutencoes.length; i++) {
          this.aliases = [...this.aliases,manutencoes[i].alias]; } */
      },
      (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
    );
  }

  ValidaControles(): void {
    if ( this.resourceForm !== undefined ) {
      this.TipoAtualizacao = [];
      if ( this.resourceForm.get('tipoModulo').value === 'WEB') {
        this.resourceForm.get('alias').clearValidators();
        this.resourceForm.get('alias').setValue(null);
        this.resourceForm.get('tipoAtualizacao').clearValidators();
        this.resourceForm.get('tipoAtualizacao').setValue(null);
        this.ctrlsAtualizacao = true;
      } else {
        this.TipoAtualizacao = [{label: 'Versão', value: 'POR_VERSAO'},
                                {label: 'Data', value: 'POR_DATA'}];
        this.resourceForm.get('alias').setValidators([Validators.required, Validators.minLength(3)]);
        this.resourceForm.get('tipoAtualizacao').setValidators([Validators.required, Validators.minLength(3)]);
        this.ctrlsAtualizacao = false;

        // this.resourceForm.get('tipoAtualizacao').disable();
        this.resourceForm.get('tipoAtualizacao').setValue('POR_VERSAO');
      }
      this.resourceForm.updateValueAndValidity();
    }
  }

  alterastatusModulo(status: string) {
    this.resourceForm.get('statusModulo').setValue(status);
  }

  /*
  onSelecionarTribunal(cdTrib: number) {
    this.carregaListaServidores(cdTrib);
  }
  */

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id:             new FormControl( '', [Validators.required, Validators.minLength(1)] ),
      sigla:          new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      alias:          new FormControl( '', [Validators.required, Validators.minLength(1)] ),
      nome:           new FormControl( '', [Validators.required, Validators.minLength(1)] ),
      descricao:      new FormControl( '', [Validators.required, Validators.minLength(1)] ),
      esquema:        new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      email:          new FormControl( '', Validators.email ),
      nomeExecutavel: new FormControl( '', ),
      majorVersion:   new FormControl( '', ),
      minorVersion:   new FormControl( '', ),
      release:        new FormControl( '', ),
      build:          new FormControl( '', ),
      versao:         new FormControl('',  [Validators.required, Validators.minLength(7)] ),
      tipoModulo:     new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      tipoAtualizacao:       new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      statusModulo:          new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      mensagemCompartilhada: new FormControl( '', [Validators.required] ),
      controlaAcesso:        new FormControl( '', [Validators.required, Validators.minLength(1), Validators.maxLength(1)] )
    });

    // this.formBuilder.control('tipoModulo').registerOnChange(this.GerenciaControles);
  }

  aliasValidator(group: FormGroup) {
    if ( group.get('tipoModulo').value === 'WEB' ) {
        group.get('alias').setValidators([]);
        group.get('alias').setValue(null);
    } else {
      group.get('alias').setValue(null);
      group.get('alias').setValidators([Validators.required, Validators.minLength(3)]);
    }
    group.updateValueAndValidity();
  }

  alteracontrolaAcesso(e) {
    if ( e ) {
      this.resourceForm.get('controlaAcesso').setValue('S');
    } else {
      this.resourceForm.get('controlaAcesso').setValue('N');
    }
  }

  onAfterloadResource() {
    let tribunal: Tribunal;
    this.resourceForm.get('id').setValue(this.id);
    this.bcontrolaAcesso = ( this.resourceForm.get('controlaAcesso').value === 'S' );
    this.ValidaControles();
    this.siglaModulo = this.resource.sigla;
    this.tribunalService.recuperarTribunalLocal().subscribe(dados => tribunal = dados);
    if ( tribunal !== undefined ) {
      this.resourceForm.get('tribunal').setValue(tribunal);
    }
    this.cdTrib = 1;
    this.alteracontrolaAcesso(this.bcontrolaAcesso);
  }

  protected creationPageTitle(): string {
    return 'Cadastro de Novo Módulo';
  }

  protected editionPageTitle(): string {
    const categoryName = this.resource.id || '';
    return 'Editando Módulo: ' + categoryName;
  }

}
