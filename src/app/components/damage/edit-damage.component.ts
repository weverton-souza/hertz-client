import { Component, OnInit } from '@angular/core';
import { Damage } from '../../model/damage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DamageService } from '../../services/damage.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-damage',
  templateUrl: './edit-damage.component.html',
  styles: []
})
export class EditDamageComponent implements OnInit {

  damage: Damage;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: DamageService) { }

  ngOnInit() {

    const idDamage = localStorage.getItem('editDamageId');

    if ( !idDamage ) {
      alert('Ação inválida');
      this.router.navigate(['list-damage']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });

    this.service.findById(idDamage)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  redirect() {
    this.router.navigate(['list-damage']);
  }

  onSubmit() {
    this.service.update(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        this.redirect();
        swal({
          position: 'top',
          type: 'success',
          title: 'Avaria atualizada com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        alert(error);
      });
  }

}
