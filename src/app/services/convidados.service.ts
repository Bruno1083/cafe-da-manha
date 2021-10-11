import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConvidadosService {

  constructor(private http: HttpClientModule) { }
}
