import { Routes } from '@angular/router';
import { AddCategoryComponent } from './components/category/add-category.component';
import { EditCategoryComponent } from './components/category/edit-category.component';
import { ListCategoryComponent } from './components/category/list-category.component';

export const ROUTES: Routes = [
    { path: 'add-category', component: AddCategoryComponent },
    { path: 'edit-category', component: EditCategoryComponent },
    { path: 'list-category', component: ListCategoryComponent },
    { path: '', pathMatch: 'full', redirectTo: 'list-category' },
    { path: '**', pathMatch: 'full', redirectTo: 'list-category' }
];
