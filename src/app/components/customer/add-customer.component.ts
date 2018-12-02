import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-customer',
  templateUrl: 'add-customer.component.html',
  styles: []
})
export class AddCustomerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: CustomerService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      document: ['', Validators.required]
    });
  }

  redirect() {
    this.router.navigate(['list-customer']);
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
