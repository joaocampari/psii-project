import { Component, OnInit } from '@angular/core';
import { CarroService } from '../carro.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html',
  styleUrls: ['./carro-list.component.scss']
})
export class CarroListComponent implements OnInit {

  filterForm;

  rows:any = [];

  columns = [
    { name: 'Modelo' },
    { name: 'Marca' },
    { name: 'Placa' },
    { name: 'Ano' },
    { name: 'Editar'}
  ];

  columnsFilter = ['Modelo', 'Marca', 'Placa', 'Ano'];

  constructor(private carroService: CarroService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.carroService.getCarros().subscribe((res: any) => {
      console.log(res);
      this.rows = res;
    });

    this.filterForm = this.fb.group({
      filterColumn: [this.columnsFilter[0]],
      filterQuery: []
    });

    console.log(this.filterForm)
  }

  $searchByFilter() {
    const filterColumn = this.filterForm.get('filterColumn').value.toLocaleUpperCase();
    const filterQuery = this.filterForm.get('filterQuery').value.toLocaleLowerCase();
    if (filterQuery) {
      this.carroService.getCarrosByFilter(filterColumn, filterQuery).subscribe((res: any) => {
        this.rows = res;
      });
    } else {
      this.carroService.getCarros().subscribe((res: any) => {
        this.rows = res;
      });
    }
  }
}
