import { Component, OnInit } from '@angular/core';
import { Category } from '../../../model/category';
import { CategoryService } from '../../../services/category.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styles: []
})
export class ListCategoryComponent implements OnInit {

  categories: Category[];
  constructor(private router: Router, private service: CategoryService) { }

  ngOnInit() {
    this.service.findAll().subscribe(data => (this.categories = data));
  }

  update(category: Category): void {
    localStorage.removeItem('id');
    localStorage.setItem('id', category.id);
    this.router.navigate(['edit-category']);
  }

  add(): void {
    this.router.navigate(['add-category']);
  }

}
