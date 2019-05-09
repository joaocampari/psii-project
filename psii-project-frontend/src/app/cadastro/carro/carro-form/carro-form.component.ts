import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router"; 
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
              private route: ActivatedRoute,
              private carroService: CarroService) { }

  ngOnInit() {
    this.carroForm = this.createFormReactive();

    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.isEditing = true;      
        this.carroForm.get('id').setValue(params.id);
      }
    });
    
  }


  private createFormReactive() {
    return this.formBuilder.group({
      id: [null],
      modelo: [],
      marca: [],
      placa: [],
      ano: []
    })
  }

  $onSave() {
    if (!this.isEditing) {
      this.carroService.saveCarro(this.carroForm.value).subscribe((res: any) => {});
    } else {
      this.carroService.updateCarro(this.carroForm.value).subscribe((res: any) => {});  
    }

  }
}
