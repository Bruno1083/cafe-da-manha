import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormCadastroComponent } from './form-cadastro/form-cadastro.component';
import { ListConvidadosComponent } from './list-convidados/list-convidados.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormCadastroComponent,
    ListConvidadosComponent
  ],
  imports: [
  RouterModule.forRoot([
    {path: '', component: FormCadastroComponent},
    // {path: 'editar/:id', component: FormCadastroComponent},
    {path: 'list-convidados', component: ListConvidadosComponent},
    {path: '', redirectTo: '/list-convidados', pathMatch: 'full'},
  ]),
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
