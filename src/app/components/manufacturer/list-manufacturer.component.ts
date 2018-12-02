import { Component, OnInit } from '@angular/core';
import { Manufacturer } from '../../model/manufacturer';
import { ManufacturerService } from '../../services/manufacturer.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-manufacturer',
  templateUrl: './list-manufacturer.component.html',
  styles: []
})
export class ListManufacturerComponent implements OnInit {

  manufacturers: Manufacturer[];
  constructor(private router: Router, private service: ManufacturerService) { }

  ngOnInit() {
    this.service.findAll().subscribe(data => (this.manufacturers = data));
  }

  delete(manufacturer: Manufacturer): void {
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
        this.service.delete(manufacturer.id).subscribe(data => {
          this.manufacturers = this.manufacturers.filter(c => c !== manufacturer);
        });
        swal('Pronto!', 'Cliente excluido', 'success');
      }
    });
  }

  update(manufacturer: Manufacturer): void {
    localStorage.removeItem('editManufacturerId');
    localStorage.setItem('editManufacturerId', manufacturer.id);
    this.router.navigate(['edit-manufacturer']);
  }

  add(): void {
    this.router.navigate(['add-manufacturer']);
  }

}
