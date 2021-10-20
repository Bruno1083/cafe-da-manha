import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ConvidadosService } from '../services/convidados.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html'
})
export class FormCadastroComponent implements OnInit {
  participantes!: Array<any>;
  participante: any;
  constructor(private service: ConvidadosService) { }

  ngOnInit(): void {
    this.participante = {};
  }
  criate(frm: NgForm) {
    this.service.criate(this.participante).subscribe(resposta => {
      this.participantes.push(resposta);

      frm.reset();
    });
  }
}
