import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.scss']
})
export class TimeListComponent implements OnInit {

  rows: any = [];

  columns = [
    { name: 'Nome' },
    { name: 'Ano' },
    { name: 'Cidade' },
    { name: 'Estado' },
    { name: 'Editar'}
  ];

  columnsFilter = ['Nome', 'Ano', 'Cidade', 'Estado'];
  filterForm;

  constructor(private timeService: TimeService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.timeService.getTimes().subscribe((res: any) => {
      this.rows = res;
    });

    this.filterForm = this.fb.group({
      filterColumn: [this.columnsFilter[0]],
      filterQuery: []
    });
  }

  $searchByFilter() {
    const filterColumn = this.filterForm.get('filterColumn').value.toLocaleUpperCase();
    const filterQuery = this.filterForm.get('filterQuery').value.toLocaleLowerCase();
    if (filterQuery) {
      this.timeService.getTimesByFilter(filterColumn, filterQuery).subscribe((res: any) => {
        this.rows = res;
      });
    } else {
      this.timeService.getTimes().subscribe((res: any) => {
        this.rows = res;
      });
    }
  }

}
