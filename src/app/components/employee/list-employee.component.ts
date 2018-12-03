import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styles: []
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee[];
  constructor(private router: Router, private service: EmployeeService) { }

  ngOnInit() {
    this.service.findAll().subscribe(data => (this.employees = data));
  }

  delete(employee: Employee): void {
    swal({
      title: 'Atenção',
      text: 'Realmente deseja excluir este empregado?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Excluir!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.service.delete(employee.id).subscribe(data => {
          this.employees = this.employees.filter(c => c !== employee);
        });
        swal('Pronto!', 'Empregado excluido', 'success');
      }
    });
  }

  update(employee: Employee): void {
    localStorage.removeItem('editEmployeeId');
    localStorage.setItem('editEmployeeId', employee.id);
    this.router.navigate(['edit-employee']);
  }

  add(): void {
    this.router.navigate(['add-employee']);
  }

}
