import { TipoAtualizacao } from './../../../../domain/tipo-atualizacao';
import { MaquinaService } from './../../../../service/maquina.service';
import { ModuloService } from '../../../../service/modulo.service';
import { Component, OnInit, Injector } from '@angular/core';

import { Validators, FormControl, NgControlStatusGroup, AbstractControl, FormGroup } from '@angular/forms';

import { BaseResourceFormComponent } from '../../../../shared/components/base-resource-form/base-resource-form.component';
import { Modulo } from '../../../../domain/modulo';
import { MaquinaServidora } from '../../../../domain/maquina-servidora';
import { TribunalService } from '../../../../service/tribunal.service';
import { TipoAplicacao } from '../../../../domain/tipo-aplicacao';


@Component({
  selector: 'app-modulo-form',
  templateUrl: './modulo-form.component.html',
  styleUrls: ['./modulo-form.component.css']
})
export class ModuloFormComponent extends BaseResourceFormComponent<Modulo> implements OnInit {

  aliasList: any[];
  aliases: string[];
  cdTrib: number;
  siglaModulo: string;
  controlaVersao: boolean;
  controlaAtualizacao: boolean;
  checked: boolean;
  TipoAplicacao: any[] = [{label: '...', value: ''},
                          {label: 'Desktop', value: 'DESKTOP'},
                          {label: 'Web', value: 'WEB'},
                          {label: 'Híbrida', value: 'HIBRIDA'}];

  TipoAtualizacao: any[] = [{label: '...', value: ''},
                          {label: 'Versão', value: 'POR_VERSAO'},
                          {label: 'Data', value: 'POR_DATA'},
                          {label: 'Não Atualiza', value: 'NAO_ATUALIZA'}];

  StatusModulo: any[] = [{label: '...', value: ''},
                         {label: 'Desenvolvimento', value: 'DESENVOLVIMENT'},
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
    // this.cdTrib = this.tribunalService.
    super.ngOnInit();
  }

  GerenciaControles(): void {
    if ( this.resourceForm !== undefined ) {
      if ( this.resourceForm.get('tipoModulo').value === 'WEB') {
        this.controlaAtualizacao = true;
        this.controlaVersao = true;
        this.resourceForm.get('alias').clearValidators();
        // this.resourceForm.get('alias').disable();
        this.resourceForm.get('alias').setValue(null);
        // this.resourceForm.get('tipoAtualizacao').disable();
        this.resourceForm.get('tipoAtualizacao').setValue('NAO_ATUALIZA');
      } else {
        this.controlaAtualizacao = false;
        this.resourceForm.get('alias').setValidators([Validators.required, Validators.minLength(1)]);
      }
      this.resourceForm.get('alias').updateValueAndValidity();
    }
  }

  /*
  onSelecionarTribunal(cdTrib: number) {
    this.carregaListaServidores(cdTrib);
  }
  */


  buscaAutoComplete(event) {
    const termo = event.query;
    this.aliases = [];
    let manutencoes: Array<MaquinaServidora> = [];
    this.maquinaService.listarServidoresdoModuloQContenham(termo)
    .subscribe(
      (resource) => {
        manutencoes = resource;
        for (let i = 0; i < manutencoes.length; i++) {
          // this.aliases = [...this.aliases, {label: manutencoes[i].alias , value: manutencoes[i].alias}];
          this.aliases = [...this.aliases, manutencoes[i].alias];
        }
      },
      (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
    );
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id:    new FormControl( '', [Validators.required, Validators.minLength(1)] ),
      sigla: new FormControl( {value: '', disabled: ( this.currentAction === 'edit' ) }, [Validators.required, Validators.minLength(3)] ),
      alias: new FormControl( '', [Validators.required, Validators.minLength(1)] ),
      nome:  new FormControl( '', [Validators.required, Validators.minLength(1)] ),
      descricao:  new FormControl( '', [Validators.required, Validators.minLength(1)] ),
      esquema:    new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      email:      new FormControl( '', Validators.email ),
      versao:     new FormControl( {value: '', disabled: ( this.currentAction === 'edit' ) },
                                  [Validators.required, Validators.minLength(7)] ),
      // tribunal:   new FormControl( '', [Validators.required] ),
      tipoModulo: new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      tipoAtualizacao:  new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      statusModulo:     new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      mensagemCompartilhada: new FormControl( '', [Validators.required] ),
      controlaAcesso: new FormControl( '', [Validators.required, Validators.minLength(1), Validators.maxLength(1)] )
    });
    // this.formBuilder.control('tipoModulo').registerOnChange(this.GerenciaControles);
  }

  alteraControlaAcesso(e: any) {
    this.checked = e.checked;
    this.setControlaAcesso(e.checked);
  }

  setControlaAcesso(value: boolean) {
    if ( value ) {
      this.resourceForm.get('controlaAcesso').setValue('S');
    } else {
      this.resourceForm.get('controlaAcesso').setValue('N');
    }
  }

  onAfterloadResource() {
    this.resourceForm.get('id').setValue(this.id);
    this.checked = ( this.resourceForm.get('controlaAcesso').value === 'S' );
    this.setControlaAcesso(this.checked);
    this.GerenciaControles();
    this.siglaModulo = this.resource.sigla;
    // this.resourceForm.get('tribunal').setValue(this.tribunalService.recuperarTribunalLocal());
    this.cdTrib = 1;
  }

  protected creationPageTitle(): string {
    return 'Cadastro de Novo Módulo';
  }

  protected editionPageTitle(): string {
    const categoryName = this.resource.id || '';
    return 'Editando Módulo: ' + categoryName;
  }

}
