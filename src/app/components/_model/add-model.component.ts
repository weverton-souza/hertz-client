import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelService } from '../../services/model.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styles: []
})
export class AddModelComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: ModelService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      modelYear: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  redirect() {
    this.router.navigate(['list-model']);
  }

  onSubmit() {
    this.service.save( this.addForm.value )
      .subscribe(data => {
        this.redirect();
        swal({
          position: 'top',
          type: 'success',
          title: 'Modelo criado!',
          showConfirmButton: false,
          timer: 1500
        });
      });
  }

}
