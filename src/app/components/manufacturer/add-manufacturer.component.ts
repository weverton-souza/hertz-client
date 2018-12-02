import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManufacturerService } from '../../services/manufacturer.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-manufacturer',
  templateUrl: 'add-manufacturer.component.html',
  styles: []
})
export class AddManufacturerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: ManufacturerService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  redirect() {
    this.router.navigate(['list-manufacturer']);
  }

  onSubmit() {
    this.service.save( this.addForm.value )
      .subscribe(data => {
        this.redirect();
        swal({
          position: 'top',
          type: 'success',
          title: 'Cliente criado!',
          showConfirmButton: false,
          timer: 1500
        });
      });
  }

}
