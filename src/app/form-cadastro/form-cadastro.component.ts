import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ConvidadosService } from '../services/convidados.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html'
})
export class FormCadastroComponent implements OnInit {
  // form:any;
  submitted = false;
  form!: FormGroup;


  participantes!: Array<any>;
  participante: any;
 
  constructor(private fb: FormBuilder, private service: ConvidadosService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      cpf: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(11)]],
      item: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]]
    })
    this.participante = {};
  }
  create(frm: NgForm) {
    this.service.create(this.participante).subscribe(resposta => {
      this.participantes.push(resposta);

      frm.reset();
    });
  }
  hasError(field:string){
    return this.form.get(field)?.errors;
  }

  onSubmit(){
    console.log(this.form.value);
    this.submitted = true;
    if(this.form.valid){
      console.log('submit');
      this.service.create(this.form.value).subscribe(
        success => console.log('sucesso'),
        error => console.log('error'),
        () => console.log('request completo')
      );
    }

  }

  onCancel(){
    this.submitted = false;
    this.form.reset();
    console.log('cancel');
  }
}
