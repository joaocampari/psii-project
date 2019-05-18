import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../cidade.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cidade-list',
  templateUrl: './cidade-list.component.html',
  styleUrls: ['./cidade-list.component.scss']
})
export class CidadeListComponent implements OnInit {

  // tslint:disable-next-line: member-ordering
  rows: any = [];

  filterForm;
  columns = [
    { name: 'Nome' },
    { name: 'Estado' },
    { name: 'Pais' },
    { name: 'Populacao' },
    { name: 'Editar'},
  ];

  columnsFilter = ['Nome', 'Estado', 'Pais', 'Populacao'];

  constructor(private cidadeService: CidadeService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.cidadeService.getCidades().subscribe((res: any) => {
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
      this.cidadeService.getCidadesByFilter(filterColumn, filterQuery).subscribe((res: any) => {
        this.rows = res;
      });
    } else {
      this.cidadeService.getCidades().subscribe((res: any) => {
        this.rows = res;
      });
    }
  }

}
