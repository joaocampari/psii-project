import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.timeForm = this.createFormReactive();

    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.isEditing = true;
        this.timeForm.get('id').setValue(params.id);
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
      // this.timeService.saveCarro(this.carroForm.value).subscribe((res: any) => {});
    } else {
      // this.timeService.updateCarro(this.carroForm.value).subscribe((res: any) => {});
    }
  }


}
