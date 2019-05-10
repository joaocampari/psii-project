import { Component, OnInit } from '@angular/core';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.scss']
})
export class CarroListComponent implements OnInit {

  constructor(private carroService: CarroService) { }

  ngOnInit() {
    this.carroService.getCarros().subscribe((res: any) => {
      console.log(res);
      this.rows = res;
    });
  }

  rows:any = [];

  columns = [
    { name: 'Modelo' },
    { name: 'Marca' },
    { name: 'Placa' },
    { name: 'Ano' },
    { name: 'Editar'},       
  ];
}
