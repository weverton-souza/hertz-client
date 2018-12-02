import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/category';
import { CategoryService } from '../../services/category.service';
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

  delete(category: Category): void {
    swal({
      title: 'Atenção',
      text: 'Realmente deseja excluir esta categoria?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Excluir!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.service.delete(category.id).subscribe(data => {
          this.categories = this.categories.filter(c => c !== category);
        });
        swal('Pronto!', 'Categoria excluida', 'success');
      }
    });
  }

  update(category: Category): void {
    localStorage.removeItem('editCategoryId');
    localStorage.setItem('editCategoryId', category.id);
    this.router.navigate(['edit-category']);
  }

  add(): void {
    this.router.navigate(['add-category']);
  }

}
