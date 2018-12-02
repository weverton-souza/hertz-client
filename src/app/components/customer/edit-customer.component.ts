import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styles: []
})
export class EditCustomerComponent implements OnInit {

  customer: Customer;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: CustomerService) { }

  ngOnInit() {

    const idCustomer = localStorage.getItem('editCustomerId');

    if ( !idCustomer ) {
      alert('Ação inválida');
      this.router.navigate(['list-customer']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      document: ['', Validators.required]
    });

    this.service.findById(idCustomer)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  redirect() {
    this.router.navigate(['list-customer']);
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
