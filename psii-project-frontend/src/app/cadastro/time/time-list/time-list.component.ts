import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-time-list',
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.scss']
})
export class TimeListComponent implements OnInit {

  constructor(private timeService: TimeService) { }

  ngOnInit() {
    this.timeService.getTimes().subscribe((res: any) => {
      this.rows = res;
    });
  }

  rows:any = [];

  columns = [
    { name: 'Nome' },
    { name: 'Ano' },
    { name: 'Cidade' },
    { name: 'Estado' },
    { name: 'Editar'},       
  ];
}
