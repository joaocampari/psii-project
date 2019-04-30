import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeComponent } from './cadastro/time/time.component';
import { AppComponent } from './app.component';
import { TimeListComponent } from './cadastro/time/time-list/time-list.component';
import { TimeFormComponent } from './cadastro/time/time-form/time-form.component';
import { CarroComponent } from './cadastro/carro/carro.component';
import { CarroListComponent } from './cadastro/carro/carro-list/carro-list.component';
import { CarroFormComponent } from './cadastro/carro/carro-form/carro-form.component';
import { CidadeComponent } from './cadastro/cidade/cidade.component';
import { CidadeListComponent } from './cadastro/cidade/cidade-list/cidade-list.component';
import { CidadeFormComponent } from './cadastro/cidade/cidade-form/cidade-form.component';

const routes: Routes = [
  {
    path: 'cadastro/time', component: TimeComponent
  },
  {
    path: 'cadastro/time/list', component: TimeListComponent
  },
  {
    path: 'cadastro/time/new', component: TimeFormComponent
  },
  {
    path: 'cadastro/time/:id', component: TimeFormComponent
  },
  {
    path: 'cadastro/carro', component: CarroComponent
  },
  {
    path: 'cadastro/carro/list', component: CarroListComponent
  },
  {
    path: 'cadastro/carro/new', component: CarroFormComponent
  },
  {
    path: 'cadastro/carro/:id', component: CarroFormComponent
  },
  {
    path: 'cadastro/cidade', component: CidadeComponent
  },
  {
    path: 'cadastro/cidade/list', component: CidadeListComponent
  },
  {
    path: 'cadastro/cidade/new', component: CidadeFormComponent
  },
  {
    path: 'cadastro/cidade/:id', component: CidadeFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
