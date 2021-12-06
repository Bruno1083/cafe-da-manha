import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConvidadosService } from '../services/convidados.service';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
})
export class FormCadastroComponent implements OnInit {
  // form:any;
  submitted = false;
  form!: FormGroup;

  participantes!: Array<any>;
  participante: any;

  constructor(
    private fb: FormBuilder,
    private service: ConvidadosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params: any) => {
    //   const id = params['id'];
    //   console.log(id);
    //   const participante$ = this.service.findById(id);
    //   participante$.subscribe(participante =>{
    //     this.updateForm(participante);
    //   })
    // });
    this.route.params
    .pipe(
      map((params: any)=>params['id']),
      switchMap(id => this.service.findById(id))
    )
    .subscribe(participante => this.updateForm(participante))

    this.form = this.fb.group({
      id: [null],
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      cpf: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(11),
        ],
      ],
      item: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
    });
    this.participante = {};
  }
  updateForm(participante: any){
    this.form.setValue({
      id: participante.id,
      nome: participante.nome,
      cpf: participante.cpf,
      item: participante.item
    });
  }
  create(frm: NgForm) {
    this.service.create(this.participante).subscribe((resposta) => {
      this.participantes.push(resposta);

      frm.reset();
    });
  }
  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit() {
    console.log(this.form.value);
    this.submitted = true;
    if (this.form.valid) {
      console.log('submit');
      this.service.create(this.form.value).subscribe(
        (success) => console.log('sucesso'),
        (error) => console.log('error'),
        () => console.log('request completo')
      );
      this.submitted = false;
      this.form.reset();
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
    console.log('cancel');
  }
}
