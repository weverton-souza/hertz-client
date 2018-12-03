import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DamageService } from '../../services/damage.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-damage',
  templateUrl: 'add-damage.component.html',
  styles: []
})
export class AddDamageComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: DamageService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  redirect() {
    this.router.navigate(['list-damage']);
  }

  onSubmit() {
    this.service.save( this.addForm.value )
      .subscribe(data => {
        this.redirect();
        swal({
          position: 'top',
          type: 'success',
          title: 'Avaria criado!',
          showConfirmButton: false,
          timer: 1500
        });
      });
  }

}
