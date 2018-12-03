import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-employee',
  templateUrl: 'add-employee.component.html',
  styles: []
})
export class AddEmployeeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: EmployeeService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      registration: ['', Validators.required]
    });
  }

  redirect() {
    this.router.navigate(['list-employee']);
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
