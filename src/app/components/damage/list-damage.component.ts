import { Component, OnInit } from '@angular/core';
import { Damage } from '../../model/damage';
import { DamageService } from '../../services/damage.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-damage',
  templateUrl: './list-damage.component.html',
  styles: []
})
export class ListDamageComponent implements OnInit {

  damages: Damage[];
  constructor(private router: Router, private service: DamageService) { }

  ngOnInit() {
    this.service.findAll().subscribe(data => (this.damages = data));
  }

  delete(damage: Damage): void {
    swal({
      title: 'Atenção',
      text: 'Realmente deseja excluir este cliente?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Excluir!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.service.delete(damage.id).subscribe(data => {
          this.damages = this.damages.filter(c => c !== damage);
        });
        swal('Pronto!', 'Avaria excluida', 'success');
      }
    });
  }

  update(damage: Damage): void {
    localStorage.removeItem('editDamageId');
    localStorage.setItem('editDamageId', damage.id);
    this.router.navigate(['edit-damage']);
  }

  add(): void {
    this.router.navigate(['add-damage']);
  }

}
