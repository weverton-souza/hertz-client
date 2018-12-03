import { Component, OnInit } from '@angular/core';
import { Rent } from '../../model/rent';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RentService } from '../../services/rent.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import swal from 'sweetalert2';
import { Vehicle } from 'src/app/model/vehicle';
import { Customer } from 'src/app/model/customer';
import { Damage } from 'src/app/model/damage';
import { TraffictTicket } from 'src/app/model/traffictTicket';
import { VehicleService } from 'src/app/services/vehicle.service';
import { CustomerService } from 'src/app/services/customer.service';
import { TraffictTicketService } from 'src/app/services/traffictTicket.service';
import { DamageService } from 'src/app/services/damage.service';

@Component({
  selector: 'app-edit-rent',
  templateUrl: './edit-rent.component.html',
  styles: []
})
export class EditRentComponent implements OnInit {

  rent: Rent;
  editForm: FormGroup;
  vehicles: Array<Vehicle> = [];
  customers: Array<Customer> = [];
  damages: Array<Damage> = [];
  tickets: Array<TraffictTicket> = [];
  selectedVehicle;
  selectedCustomer;
  selectedDamage;
  selectedTicket;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private service: RentService,
    private vehicleService: VehicleService,
    private customerService: CustomerService,
    private damageService: DamageService,
    private traffictTicketService: TraffictTicketService) { }

  ngOnInit() {

    const idRent = localStorage.getItem('editRentId');
    this.vehicleService.findAll().subscribe(data => (this.vehicles = data));
    this.customerService.findAll().subscribe(data => (this.customers = data));
    this.damageService.findAll().subscribe(data => (this.damages = data));
    this.traffictTicketService.findAll().subscribe(data => (this.tickets = data));

    if ( !idRent ) {
      alert('Ação inválida');
      this.router.navigate(['list-rent']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      data: ['', Validators.required],
      vehicle: ['', Validators.required],
      customer  : ['', Validators.required],
      damage: ['', Validators.required],
      traffictTickets: ['', Validators.required]
    });

    this.service.findById(idRent)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  redirect() {
    this.router.navigate(['list-rent']);
  }

  onSubmit() {
    this.editForm.value.vehicle = this.vehicles[this.selectedVehicle];
    this.editForm.value.customer = this.customers[this.selectedCustomer];
    this.editForm.value.damage = this.damages[this.selectedDamage];
    this.editForm.value.traffictTickets = this.tickets[this.selectedTicket];

    this.service.update(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        this.redirect();
        swal({
          position: 'top',
          type: 'success',
          title: 'Aluguel atualizado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        alert(error);
      });
  }

}
