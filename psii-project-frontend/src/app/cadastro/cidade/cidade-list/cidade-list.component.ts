import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cidade-list',
  templateUrl: './cidade-list.component.html',
  styleUrls: ['./cidade-list.component.scss']
})
export class CidadeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rows = [
    {
      id: 1,
      nome: 'AMERICANA',
      estado: 'SP',
      pais: 'BRASIL',
      populacao: 'SP',
    },
    {
      id: 1,
      nome: 'AMERICANA',
      estado: 'SP',
      pais: 'BRASIL',
      populacao: 'SP',
    },
    {
      id: 1,
      nome: 'AMERICANA',
      estado: 'SP',
      pais: 'BRASIL',
      populacao: 'SP',
    },

  ];

  columns = [
    { name: 'Nome' },
    { name: 'Estado' },
    { name: 'Pais' },
    { name: 'Populacao' },
    { name: 'Editar'},       
  ];

}
