import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RentService } from '../../services/rent.service';
import swal from 'sweetalert2';
import { VehicleService } from 'src/app/services/vehicle.service';
import { CustomerService } from 'src/app/services/customer.service';
import { DamageService } from 'src/app/services/damage.service';
import { TraffictTicketService } from 'src/app/services/traffictTicket.service';
import { Vehicle } from 'src/app/model/vehicle';
import { Customer } from 'src/app/model/customer';
import { Damage } from 'src/app/model/damage';
import { TraffictTicket } from 'src/app/model/traffictTicket';

@Component({
  selector: 'app-add-rent',
  templateUrl: 'add-rent.component.html',
  styles: []
})
export class AddRentComponent implements OnInit {

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

  addForm: FormGroup;

  ngOnInit() {
    this.vehicleService.findAll().subscribe(data => (this.vehicles = data));
    this.customerService.findAll().subscribe(data => (this.customers = data));
    this.damageService.findAll().subscribe(data => (this.damages = data));
    this.traffictTicketService.findAll().subscribe(data => (this.tickets = data));

    this.addForm = this.formBuilder.group({
      id: [],
      data: ['', Validators.required],
      vehicle: ['', Validators.required],
      customer  : ['', Validators.required],
      damage: ['', Validators.required],
      traffictTickets: ['', Validators.required]
    });
  }

  redirect() {
    this.router.navigate(['list-rent']);
  }

  onSubmit() {
    this.addForm.value.vehicle = this.vehicles[this.selectedVehicle];
    this.addForm.value.customer = this.customers[this.selectedCustomer];
    this.addForm.value.damage = this.damages[this.selectedDamage];
    this.addForm.value.traffictTickets = this.tickets[this.selectedTicket];

    this.service.save( this.addForm.value )
      .subscribe(data => {
        this.redirect();
        swal({
          position: 'top',
          type: 'success',
          title: 'Aluguel criado!',
          showConfirmButton: false,
          timer: 1500
        });
      });
  }

}
