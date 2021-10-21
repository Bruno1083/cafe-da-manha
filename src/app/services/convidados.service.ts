import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConvidadosService {

  // convidadosUrl = 'http://localhost:8080/participante';
  convidadosUrl = '/api'

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Array<any>>(this.convidadosUrl);
  }

  create(convidado: any){
    return this.http.post(this.convidadosUrl, convidado);
  }

}
