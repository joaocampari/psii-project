import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cidade-form',
  templateUrl: './cidade-form.component.html',
  styleUrls: ['./cidade-form.component.scss']
})
export class CidadeFormComponent implements OnInit {

  // Form
  cidadeForm;

  // Flag edição
  isEditing = false;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.cidadeForm = this.createFormReactive();

    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.isEditing = true;
        this.cidadeForm.get('id').setValue(params.id);
      }
    });
  }

  private createFormReactive() {
    return this.formBuilder.group({
      id: [null],
      nome: [],
      estado: [],
      pais: [],
      populacao: []
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
