import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ListCategoryComponent } from './components/category/list-category.component';
import { EditCategoryComponent } from './components/category/edit-category.component';
import { AddCategoryComponent } from './components/category/add-category.component';

import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListCategoryComponent,
    EditCategoryComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
