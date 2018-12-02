import { Component, OnInit } from '@angular/core';
import { Model } from '../../model/model';
import { ModelService } from '../../services/model.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-model',
  templateUrl: './list-model.component.html',
  styles: []
})

export class ListModelComponent implements OnInit {

  models: Model[];
  constructor(private router: Router, private service: ModelService) { }

  ngOnInit() {
    this.service.findAll().subscribe(data => (this.models = data));
  }

  delete(model: Model): void {
    swal({
      title: 'Atenção',
      text: 'Realmente deseja excluir este Modelo?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Excluir!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.service.delete(model.id).subscribe(data => {
          this.models = this.models.filter(c => c !== model);
        });
        swal('Pronto!', 'Modelo excluido', 'success');
      }
    });
  }

  update(model: Model): void {
    localStorage.removeItem('editModelId');
    localStorage.setItem('editModelId', model.id);
    this.router.navigate(['edit-model']);
  }

  add(): void {
    this.router.navigate(['add-model']);
  }

}
