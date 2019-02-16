import { Component, OnInit } from '@angular/core';
import { ModuloService } from '../../../service/modulo.service';
import { Message } from 'primeng/api';
import { Modulo } from '../../../domain/modulo';
import { MaquinaServidora } from '../../../domain/maquina-servidora';
import { MaquinaService } from '../../../service/maquina.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})

export class ModuloComponent implements OnInit {

  form: FormGroup;
  id: string;
  tipo: string[];
  alias = [];
  selectedAlias = [];
  tipoAplicacao = [];
  modulo: any = null;
  msgs: Message[];
  rota: string;


  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder,
              private moduloService: ModuloService,
              private maquinaService: MaquinaService,
              private route: ActivatedRoute) {
    if ( this.route.snapshot.paramMap.has('id') ) {
        this.id = this.route.snapshot.paramMap.get('id');
    } else {
        this.id = null;
    }
    this.carregaListaServidores(Number(this.id));
   }

  ngOnInit() {
    this.tipoAplicacao = [
      {label: 'Aplicação Desktop', value: 'DESKTOP'},
      {label: 'Aplicação Web', value: 'WEB'},
      {label: 'Híbrida', value: 'HIBRIDO'}
    ];

    this.modulo = new Modulo();

    if ( this.id ) {
      this.recuperarModulo(this.id);
      this.rota = 'Editar';
    } else {
      this.rota = 'Novo';
    }

    this.inicializaForm();
  }

  inicializaForm() {
    if ( this.id ) {
      this.form = this.formBuilder.group({
        id:   [this.id, [Validators.required, Validators.minLength(1)] ],
        sigla: [this.modulo.sigla, [Validators.required, Validators.minLength(3)] ],
        alias: [this.selectedAlias, [Validators.required, Validators.minLength(1)] ],
        esquema: [this.modulo.esquema, [Validators.required, Validators.minLength(3)] ],
        versao: [this.modulo.versao, [Validators.required, Validators.minLength(7)] ],
        mensagemCompartilhada: [this.modulo.mensagemCompartilhada,
                              [Validators.required, Validators.minLength(1), Validators.maxLength(1)] ],
        controlaAcesso: [this.modulo.controlaAcesso, [Validators.required, Validators.minLength(1), Validators.maxLength(1)] ]
      });
    } else {
      this.form = this.formBuilder.group({
        id:   ['', [Validators.required, Validators.minLength(1)] ],
        sigla: ['', [Validators.required, Validators.minLength(3)] ],
        alias: ['', [Validators.required, Validators.minLength(1)] ],
        esquema: ['', [Validators.required, Validators.minLength(3)] ],
        versao: ['', [Validators.required, Validators.minLength(7)] ],
        mensagemCompartilhada: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)] ],
        controlaAcesso: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)] ]
      });
   }
  }


  recuperarModulo(id: string) {
    this.moduloService.getById(+this.id).subscribe(dados => this.modulo = dados);
  }

  carregaListaServidores(cdModulo: number) {
    this.alias = [];
    this.alias = [...this.alias, {label: 'Selecione o Alias' , value: ''}];
    let manutencoes: Array<MaquinaServidora> = [];
    this.maquinaService.listarServidoresdoModulo(cdModulo).subscribe(dados => manutencoes = dados);
    for (let i = 1; i < manutencoes.length; i++) {
      this.alias = [...this.alias, {label: manutencoes[i].descricao , value: manutencoes[i].id}];
    }
  }


  deleteModulo(modulo: Modulo) {

    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Módulo excluído', detail: modulo.id + ' - ' + modulo.sigla });
  }

  retornaAlias(alias: string) {
    this.selectedAlias = [];
    for (let i = 0; i < this.alias.length; i++) {
      if ( alias === this.alias[i].value ) {
        this.selectedAlias = this.alias[i];
      }
    }
  }


  cloneModulo(m: Modulo): Modulo {
    const modulo = new Modulo();
    // tslint:disable-next-line:forin
    for (const prop in m) {
        modulo[prop] = m[prop];
    }
    return modulo;
   }
}
