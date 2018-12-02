import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styles: []
})
export class ListCustomerComponent implements OnInit {

  customers: Customer[];
  constructor(private router: Router, private service: CustomerService) { }

  ngOnInit() {
    this.service.findAll().subscribe(data => (this.customers = data));
  }

  delete(customer: Customer): void {
    swal({
      title: 'Atenção',
      text: 'Realmente deseja excluir este cliente?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Excluir!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.service.delete(customer.id).subscribe(data => {
          this.customers = this.customers.filter(c => c !== customer);
        });
        swal('Pronto!', 'Cliente excluido', 'success');
      }
    });
  }

  update(customer: Customer): void {
    localStorage.removeItem('editCustomerId');
    localStorage.setItem('editCustomerId', customer.id);
    this.router.navigate(['edit-customer']);
  }

  add(): void {
    this.router.navigate(['add-customer']);
  }

}
