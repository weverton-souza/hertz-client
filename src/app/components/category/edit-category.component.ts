import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/category';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styles: []
})
export class EditCategoryComponent implements OnInit {

  category: Category;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: CategoryService) { }

  ngOnInit() {

    const idCategory = localStorage.getItem('editCategoryId');

    if ( !idCategory ) {
      alert('Ação inválida');
      this.router.navigate(['list-category']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });

    this.service.findById(idCategory)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  redirect() {
    this.router.navigate(['list-category']);
  }

  onSubmit() {
    this.service.update(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        this.redirect();
        swal({
          position: 'top',
          type: 'success',
          title: 'Categoria atualizada com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        alert(error);
      });
  }

}
