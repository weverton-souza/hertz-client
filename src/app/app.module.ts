import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ListCategoryComponent } from './components/category/list-category.component';
import { EditCategoryComponent } from './components/category/edit-category.component';
import { AddCategoryComponent } from './components/category/add-category.component';

import { AddModelComponent } from './components/_model/add-model.component';
import { ListModelComponent } from './components/_model/list-model.component';
import { EditModelComponent } from './components/_model/edit-model.component';

import { AddCustomerComponent } from './components/customer/add-customer.component';
import { ListCustomerComponent } from './components/customer/list-customer.component';
import { EditCustomerComponent } from './components/customer/edit-customer.component';

import { AddManufacturerComponent } from './components/manufacturer/add-manufacturer.component';
import { ListManufacturerComponent } from './components/manufacturer/list-manufacturer.component';
import { EditManufacturerComponent } from './components/manufacturer/edit-manufacturer.component';

import { AddVehicleComponent } from './components/vehicle/add-vehicle.component';
import { EditVehicleComponent } from './components/vehicle/edit-vehicle.component';
import { ListVehicleComponent } from './components/vehicle/list-vehicle.component';

import { AddDamageComponent } from './components/damage/add-damage.component';
import { EditDamageComponent } from './components/damage/edit-damage.component';
import { ListDamageComponent } from './components/damage/list-damage.component';

import { AddTraffictTicketComponent } from './components/traffictTicket/add-traffictTicket.component';
import { EditTraffictTicketComponent } from './components/traffictTicket/edit-traffictTicket.component';
import { ListTraffictTicketComponent } from './components/traffictTicket/list-traffictTicket.component';

import { AddEmployeeComponent } from './components/employee/add-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee.component';
import { ListEmployeeComponent } from './components/employee/list-employee.component';

import { AddRentComponent } from './components/rent/add-rent.component';
import { EditRentComponent } from './components/rent/edit-rent.component';
import { ListRentComponent } from './components/rent/list-rent.component';

import { ShowHomeComponent } from './components/home/show-home.component';

import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListCategoryComponent,
    EditCategoryComponent,
    AddCategoryComponent,

    AddModelComponent,
    ListModelComponent,
    EditModelComponent,

    AddCustomerComponent,
    ListCustomerComponent,
    EditCustomerComponent,

    AddManufacturerComponent,
    ListManufacturerComponent,
    EditManufacturerComponent,

    AddVehicleComponent,
    ListVehicleComponent,
    EditVehicleComponent,

    AddDamageComponent,
    ListDamageComponent,
    EditDamageComponent,

    AddTraffictTicketComponent,
    EditTraffictTicketComponent,
    ListTraffictTicketComponent,

    AddEmployeeComponent,
    EditEmployeeComponent,
    ListEmployeeComponent,

    AddRentComponent,
    EditRentComponent,
    ListRentComponent,

    ShowHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
