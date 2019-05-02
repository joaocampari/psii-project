import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.scss']
})
export class CarroListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rows = [
    {
      id: 1,
      modelo: 'GOLF',
      montadora: 'Volks',
      placa: 'ABC-1233',
      ano: '2015',
    },
    {
      id: 1,
      modelo: 'GOLF',
      montadora: 'Volks',
      placa: 'ABC-1233',
      ano: '2015',
    },
    {
      id: 1,
      modelo: 'GOLF',
      montadora: 'Volks',
      placa: 'ABC-1233',
      ano: '2015',
    },

  ];

  columns = [
    { name: 'Modelo' },
    { name: 'Montadora' },
    { name: 'Placa' },
    { name: 'Ano' },
    { name: 'Editar'},       
  ];
}
