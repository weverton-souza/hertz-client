import { Routes } from '@angular/router';
import { AddCategoryComponent } from './components/category/add-category.component';
import { EditCategoryComponent } from './components/category/edit-category.component';
import { ListCategoryComponent } from './components/category/list-category.component';

import { AddModelComponent } from './components/_model/add-model.component';
import { EditModelComponent } from './components/_model/edit-model.component';
import { ListModelComponent } from './components/_model/list-model.component';

import { AddCustomerComponent } from './components/customer/add-customer.component';
import { EditCustomerComponent } from './components/customer/edit-customer.component';
import { ListCustomerComponent } from './components/customer/list-customer.component';

import { AddManufacturerComponent } from './components/manufacturer/add-manufacturer.component';
import { EditManufacturerComponent } from './components/manufacturer/edit-manufacturer.component';
import { ListManufacturerComponent } from './components/manufacturer/list-manufacturer.component';

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

export const ROUTES: Routes = [
    { path: 'add-category', component: AddCategoryComponent },
    { path: 'edit-category', component: EditCategoryComponent },
    { path: 'list-category', component: ListCategoryComponent },

    { path: 'add-model', component: AddModelComponent },
    { path: 'edit-model', component: EditModelComponent },
    { path: 'list-model', component: ListModelComponent },

    { path: 'add-customer', component: AddCustomerComponent },
    { path: 'edit-customer', component: EditCustomerComponent },
    { path: 'list-customer', component: ListCustomerComponent },

    { path: 'add-manufacturer', component: AddManufacturerComponent },
    { path: 'edit-manufacturer', component: EditManufacturerComponent },
    { path: 'list-manufacturer', component: ListManufacturerComponent },

    { path: 'add-vehicle', component: AddVehicleComponent },
    { path: 'edit-vehicle', component: EditVehicleComponent },
    { path: 'list-vehicle', component: ListVehicleComponent },

    { path: 'add-damage', component: AddDamageComponent },
    { path: 'edit-damage', component: EditDamageComponent },
    { path: 'list-damage', component: ListDamageComponent },

    { path: 'add-traffictTicket', component: AddTraffictTicketComponent },
    { path: 'edit-traffictTicket', component: EditTraffictTicketComponent },
    { path: 'list-traffictTicket', component: ListTraffictTicketComponent },

    { path: 'add-employee', component: AddEmployeeComponent },
    { path: 'edit-employee', component: EditEmployeeComponent },
    { path: 'list-employee', component: ListEmployeeComponent },

    { path: 'add-rent', component: AddRentComponent },
    { path: 'edit-rent', component: EditRentComponent },
    { path: 'list-rent', component: ListRentComponent },

    { path: 'home', component: ShowHomeComponent },

    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
