import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-carro-form',
  templateUrl: './carro-form.component.html',
  styleUrls: ['./carro-form.component.scss']
})
export class CarroFormComponent implements OnInit {

  // Formulario
  carroForm;

  // Flag edição
  isEditing = false;

  /**
   * Construtor
   * @param formBuilder
   * @param route 
   */
  constructor(private formBuilder: FormBuilder,
              private route: Router,
              private carroService: CarroService) { }

  ngOnInit() {
    if (this.route.url !== '/cadastro/carro/new') {
      this.isEditing = true;
    }

    this.carroForm = this.createFormReactive();
  }


  private createFormReactive() {
    return this.formBuilder.group({
      id: [null],
      modelo: [],
      montadora: [],
      placa: [],
      ano: []
    })
  }

  $onSave() {
    console.log(this.carroForm.value)

    if (!this.isEditing) {
      this.carroService.saveCarro(this.carroForm.value).subscribe((res: any) => {});
    } else {
      this.carroService.updateCarro(this.carroForm.value);
    }
  }
}
