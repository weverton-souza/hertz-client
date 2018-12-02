import { Component, OnInit } from '@angular/core';
import { Manufacturer } from '../../model/manufacturer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ManufacturerService } from '../../services/manufacturer.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-manufacturer',
  templateUrl: './edit-manufacturer.component.html',
  styles: []
})

export class EditManufacturerComponent implements OnInit {

  manufacturers: Manufacturer;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: ManufacturerService) { }

  ngOnInit() {

    const idManufacturer = localStorage.getItem('editManufacturerId');

    if ( !idManufacturer ) {
      alert('Ação inválida');
      this.router.navigate(['list-manufacturer']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.service.findById(idManufacturer)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  redirect() {
    this.router.navigate(['list-manufacturer']);
  }

  onSubmit() {
    this.service.update(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        this.redirect();
        swal({
          position: 'top',
          type: 'success',
          title: 'Fabricante atualizado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        alert(error);
      });
  }

}
