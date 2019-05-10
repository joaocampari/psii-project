import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadeService } from '../cidade.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
              private route: ActivatedRoute,
              private cidadeService: CidadeService,
              private router: Router) { }

  ngOnInit() {
    this.cidadeForm = this.createFormReactive();

    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.isEditing = true;
        this.cidadeForm.get('id').setValue(params.id);
        this.cidadeService.getCidade(params.id).subscribe((res: any) => {
          this.cidadeForm.setValue(res);
        });
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
      this.cidadeService.saveCidade(this.cidadeForm.value).subscribe((res: any) => {});
      setTimeout(() => {
        this.router.navigate(['/cadastro/cidade']);
      }, 200);
    } else {
      this.cidadeService.updateCidade(this.cidadeForm.value).subscribe((res: any) => {});
      setTimeout(() => {
        this.router.navigate(['/cadastro/cidade']);
      }, 200);
    }
  }

  $onDelete() {
    this.cidadeService.deleteCidade(this.cidadeForm.value.id).subscribe((res: any) => {});
    setTimeout(() => {
      this.router.navigate(['/cadastro/cidade']);
    }, 200);
  }

}
