import { Component, OnInit } from '@angular/core';
import { ConvidadosService } from '../services/convidados.service';

@Component({
  selector: 'app-list-convidados',
  templateUrl: './list-convidados.component.html',
})
export class ListConvidadosComponent implements OnInit {

  participantes!: Array<any>;

  constructor(private service: ConvidadosService) { }

  ngOnInit(): void {
    this.service.list()
    .subscribe(resposta => this.participantes = resposta);
  }

}
