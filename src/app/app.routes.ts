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
    { path: 'list-manufacturer', component: ListManufacturerComponent }
    // { path: '', pathMatch: 'full', redirectTo: 'list-category' },
    // { path: '**', pathMatch: 'full', redirectTo: 'list-category' }
];
