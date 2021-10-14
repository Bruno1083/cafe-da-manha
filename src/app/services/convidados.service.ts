import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConvidadosService {

  convidadosUrl = '';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Array<any>>(this.convidadosUrl);
  }

  criate(convidado: any){
    return this.http.post(this.convidadosUrl, convidado);
  }

}
