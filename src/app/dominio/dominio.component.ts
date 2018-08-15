import { Component, OnInit } from '@angular/core';
import { Dominio } from '../domain/dominio';
import { DominioService } from '../service/dominio.service';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-dominio',
  templateUrl: './dominio.component.html',
  styleUrls: ['./dominio.component.css']
})
export class DominioComponent implements OnInit {
  form: FormGroup;
  dominio: Dominio;

  constructor(private formBuilder: FormBuilder, private dominioService: DominioService) { }

  ngOnInit() {
    this.dominio = new Dominio();
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(6)] ],
      cd: ['', [Validators.required, Validators.minLength(6)] ],
      descricao: ['', [Validators.required, Validators.minLength(2)] ]
    });
  }

  GravarDominio() {
  if (this.dominio.id) {
    return this.dominioService.updateDominio(this.dominio);
  } else {
    return this.dominioService.addDominio(this.dominio);
  }
  }

  onSubmit(form): void {
    this.GravarDominio();
    // console.log(form);
    // console.log(this.dominio);
  }


}
