import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.scss']
})
export class TimeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rows = [
    {
      id: 1,
      nome: 'CORINTHIANS',
      ano: '1968',
      cidade: 'SAO PAULO',
      estado: 'SP',
    },
    {
      id: 1,
      nome: 'CORINTHIANS',
      ano: '1968',
      cidade: 'SAO PAULO',
      estado: 'SP',
    },
    {
      id: 1,
      nome: 'CORINTHIANS',
      ano: '1968',
      cidade: 'SAO PAULO',
      estado: 'SP',
    },

  ];

  columns = [
    { name: 'Nome' },
    { name: 'Ano' },
    { name: 'Cidade' },
    { name: 'Estado' },
    { name: 'Editar'},       
  ];
}
