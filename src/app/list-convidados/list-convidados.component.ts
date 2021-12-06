import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConvidadosService } from '../services/convidados.service';

@Component({
  selector: 'app-list-convidados',
  templateUrl: './list-convidados.component.html',
})
export class ListConvidadosComponent implements OnInit {

  participantes!: Array<any>;

  constructor(private service: ConvidadosService,
    private router:Router) { }

  ngOnInit(): void {
    this.service.list()
    .subscribe(resposta => this.participantes = resposta);
  }

  onEdit(id: any){
    this.router.navigate(['editar', id]);
  }

  onDelite(){
    console.log("deletar");
  }

}
