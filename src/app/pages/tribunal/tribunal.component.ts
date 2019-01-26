import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tribunal } from './../../domain/tribunal';
import { TribunalService } from '../../service/tribunal.service';
import { Route, ActivatedRoute } from '@angular/router';
import { ConfirmationService, Message } from 'primeng/api';


@Component({
  selector: 'app-tribunal',
  templateUrl: './tribunal.component.html',
  styleUrls: ['./tribunal.component.css']
})

export class TribunalComponent implements OnInit {
  id: string;
  tribunal: Tribunal;
  form: FormGroup;
  ufs = [];
  msgs: Message[] = [];
  rota: string;

  constructor(private formBuilder: FormBuilder, private tribunalService: TribunalService, private route: ActivatedRoute,
              private confirmationService: ConfirmationService) {
   }

  ngOnInit() {
    this.ufs = [{value: 'AC', viewValue: 'Acre'},
                {value: 'AL', viewValue: 'Alagoas'},
                {value: 'AM', viewValue: 'Amazonas'},
                {value: 'AP', viewValue: 'Amapá'}];

    if ( this.route.snapshot.paramMap.has('id') ) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.rota = 'Editar';
    } else {
      this.id = null;
      this.rota = 'Novo';
    }

    this.tribunal = new Tribunal();

    if ( this.id ) {
      this.recuperarTribunal(this.id);
    }

    this.inicializaForm();
  }

  recuperarTribunal(id: string) {
    this.tribunalService.recuperarTribunal(id).subscribe(dados => this.tribunal = dados);
  }

  inicializaForm() {
    if ( this.id ) {
      this.form = this.formBuilder.group({
        id: [this.tribunal.id, [Validators.required] ],
        nome: [this.tribunal.nome, [Validators.required, Validators.minLength(6)] ],
        sigla: [this.tribunal.sigla, [Validators.required, Validators.minLength(6)] ],
        logradouro: [this.tribunal.logradouro, [Validators.required, Validators.minLength(10)] ],
        bairro: [this.tribunal.bairro, [Validators.required, Validators.minLength(10)] ],
        uf: [this.tribunal.uf, [Validators.required, Validators.minLength(2)] ],
        cep: [this.tribunal.cep, [Validators.required, Validators.minLength(8)] ],
        cidade: [this.tribunal.cidade, [Validators.required, Validators.minLength(3)] ],
        telefone: [this.tribunal.telefone, [Validators.required, Validators.minLength(11)] ],
        cgc: [this.tribunal.cgc, [Validators.required, Validators.minLength(14)] ],
        numeroContrato: [this.tribunal.numeroContrato, [Validators.required, Validators.minLength(3)] ],
        descricaoContrato: [this.tribunal.descricaoContrato, [Validators.required, Validators.minLength(6)] ],
        codigoMunicipioIBGE: [this.tribunal.codigoMunicipioIBGE, [Validators.required, Validators.minLength(3)] ],
        codigoNaturezaJuridica: [this.tribunal.codigoNaturezaJuridica, [Validators.required, Validators.minLength(3)] ],
        email: [this.tribunal.email, [Validators.required, Validators.minLength(6), Validators.email] ]
       });
    }
  }

  GravarTribunal() {
    const tribunal = Object.assign(this.tribunal, this.form.value);
    if ( this.id ) {
      return this.tribunalService.updateTribunal(tribunal);
    } else {
      return this.tribunalService.addTribunal(tribunal);
    }
  }


  onSubmit(form): void {
    let confirmation = null;
    confirmation = this.confirmationService.confirm({message: 'Confirma a operação?' ,
    header: 'Confirmação' ,
    icon: 'pi pi-exclamation-triangle' ,
    accept: () => {
          this.GravarTribunal();
          this.form.reset();
          this.msgs = [{severity: 'info', summary: 'Confirmado', detail: 'You have accepted'}];
      }
    });

    /*
    if ( this.msgs[0].summary === 'Confirmado' ) {
      this.GravarDominio();
    }
    */
    // this.GravarDominio();
    // console.log(form);
    // console.log(this.dominio);
  }


}
