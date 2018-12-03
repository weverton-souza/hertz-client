import { Component, OnInit } from '@angular/core';
import { Rent } from '../../model/rent';
import { RentService } from '../../services/rent.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-rent',
  templateUrl: './list-rent.component.html',
  styles: []
})
export class ListRentComponent implements OnInit {

  rents: Rent[];
  constructor(private router: Router, private service: RentService) { }

  ngOnInit() {
    this.service.findAll().subscribe(data => (this.rents = data));
  }

  delete(rent: Rent): void {
    swal({
      title: 'Atenção',
      text: 'Realmente deseja excluir este aluguel?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Excluir!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.service.delete(rent.id).subscribe(data => {
          this.rents = this.rents.filter(c => c !== rent);
        });
        swal('Pronto!', 'Aluguel excluida', 'success');
      }
    });
  }

  update(rent: Rent): void {
    localStorage.removeItem('editRentId');
    localStorage.setItem('editRentId', rent.id);
    this.router.navigate(['edit-rent']);
  }

  add(): void {
    this.router.navigate(['add-rent']);
  }

}
