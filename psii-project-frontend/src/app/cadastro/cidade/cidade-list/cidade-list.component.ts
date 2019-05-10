import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../cidade.service';

@Component({
  selector: 'app-cidade-list',
  templateUrl: './cidade-list.component.html',
  styleUrls: ['./cidade-list.component.scss']
})
export class CidadeListComponent implements OnInit {

  constructor(private cidadeService: CidadeService) { }

  ngOnInit() {
    this.cidadeService.getCidades().subscribe((res: any) => {
      this.rows = res;
    });
  }

  // tslint:disable-next-line: member-ordering
  rows: any = [];

  columns = [
    { name: 'Nome' },
    { name: 'Estado' },
    { name: 'Pais' },
    { name: 'Populacao' },
    { name: 'Editar'},       
  ];

}
