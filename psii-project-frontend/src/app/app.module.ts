import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TimeComponent } from './cadastro/time/time.component';
import { TimeFormComponent } from './cadastro/time/time-form/time-form.component';
import { TimeListComponent } from './cadastro/time/time-list/time-list.component';
import { CarroComponent } from './cadastro/carro/carro.component';
import { CarroFormComponent } from './cadastro/carro/carro-form/carro-form.component';
import { CarroListComponent } from './cadastro/carro/carro-list/carro-list.component';
import { CidadeComponent } from './cadastro/cidade/cidade.component';
import { CidadeFormComponent } from './cadastro/cidade/cidade-form/cidade-form.component';
import { CidadeListComponent } from './cadastro/cidade/cidade-list/cidade-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    TimeComponent,
    TimeFormComponent,
    TimeListComponent,
    CarroComponent,
    CarroFormComponent,
    CarroListComponent,
    CidadeComponent,
    CidadeFormComponent,
    CidadeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
