import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-time-form',
  templateUrl: './time-form.component.html',
  styleUrls: ['./time-form.component.scss']
})
export class TimeFormComponent implements OnInit {

  // Form
  timeForm;

  // Flag is editing
  isEditing = false;


  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private timeService: TimeService) { }

  ngOnInit() {
    this.timeForm = this.createFormReactive();

    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.isEditing = true;
        this.timeForm.get('id').setValue(params.id);
        this.timeService.getTime(params.id).subscribe((res: any) => {
          this.timeForm.setValue(res);
        });
      }
    });
  }

  private createFormReactive() {
    return this.formBuilder.group({
      id: [null],
      nome: [],
      ano: [],
      cidade: [],
      estado: []
    });
  }

  $onSave() {
    if (!this.isEditing) {
      this.timeService.saveTime(this.timeForm.value).subscribe((res: any) => {});
      setTimeout(() => {
        this.router.navigate(['/cadastro/time']);
      }, 200);
    } else {
      this.timeService.updateTime(this.timeForm.value).subscribe((res: any) => {});
      setTimeout(() => {
        this.router.navigate(['/cadastro/time']);
      }, 200);
    }
  }

  $onDelete() {
    this.timeService.deleteTime(this.timeForm.value.id).subscribe((res: any) => {});
    setTimeout(() => {
      this.router.navigate(['/cadastro/time']);
    }, 200);
  }


}
