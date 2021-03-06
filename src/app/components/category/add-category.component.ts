import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: 'add-category.component.html',
  styles: []
})
export class AddCategoryComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: CategoryService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  redirect() {
    this.router.navigate(['list-category']);
  }

  onSubmit() {
    this.service.save( this.addForm.value )
      .subscribe(data => {
        this.redirect();
        swal({
          position: 'top',
          type: 'success',
          title: 'Categoria criada!',
          showConfirmButton: false,
          timer: 1500
        });
      });
  }

}
