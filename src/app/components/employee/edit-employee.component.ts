import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styles: []
})
export class EditEmployeeComponent implements OnInit {

  employee: Employee;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: EmployeeService) { }

  ngOnInit() {

    const idEmployee = localStorage.getItem('editEmployeeId');

    if ( !idEmployee ) {
      alert('Ação inválida');
      this.router.navigate(['list-employee']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      registration: ['', Validators.required]
    });

    this.service.findById(idEmployee)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  redirect() {
    this.router.navigate(['list-employee']);
  }

  onSubmit() {
    this.service.update(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        this.redirect();
        swal({
          position: 'top',
          type: 'success',
          title: 'Empregado atualizado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        alert(error);
      });
  }

}
