import { Component, OnInit } from '@angular/core';
import { Model } from '../../model/model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModelService } from '../../services/model.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-model',
  templateUrl: './edit-model.component.html',
  styles: []
})
export class EditModelComponent implements OnInit {

  model: Model;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: ModelService) { }

  ngOnInit() {

    const idModel = localStorage.getItem('editModelId');

    if ( !idModel ) {
      alert('Ação inválida');
      this.router.navigate(['list-model']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      modelYear: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.service.findById(idModel)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  redirect() {
    this.router.navigate(['list-model']);
  }

  onSubmit() {
    this.service.update(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        this.redirect();
        swal({
          position: 'top',
          type: 'success',
          title: 'Modelo atualizada com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        alert(error);
      });
  }

}
