import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../model/vehicle';
import { VehicleService } from '../../services/vehicle.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styles: []
})
export class ListVehicleComponent implements OnInit {

  vehicles: Vehicle[];
  constructor(private router: Router, private service: VehicleService) { }

  ngOnInit() {
    this.service.findAll().subscribe(data => (this.vehicles = data));
  }

  delete(vehicle: Vehicle): void {
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
        this.service.delete(vehicle.id).subscribe(data => {
          this.vehicles = this.vehicles.filter(c => c !== vehicle);
        });
        swal('Pronto!', 'Veículo excluido.', 'success');
      }
    });
  }

  update(vehicle: Vehicle): void {
    localStorage.removeItem('editVehicleId');
    localStorage.setItem('editVehicleId', vehicle.id);

    localStorage.removeItem('editCategoryId');
    localStorage.setItem('editCategoryId', vehicle.category.id);

    localStorage.removeItem('editManufacturerId');
    localStorage.setItem('editManufacturerId', vehicle.make.id);

    localStorage.removeItem('editModelId');
    localStorage.setItem('editModelId', vehicle.model.id);

    this.router.navigate(['edit-vehicle']);
  }

  add(): void {
    this.router.navigate(['add-vehicle']);
  }

}
