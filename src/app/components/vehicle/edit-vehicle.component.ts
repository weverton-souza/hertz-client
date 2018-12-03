import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../model/vehicle';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import swal from 'sweetalert2';
import { Category } from 'src/app/model/category';
import { Manufacturer } from 'src/app/model/manufacturer';
import { Model } from 'src/app/model/model';
import { CategoryService } from 'src/app/services/category.service';
import { ManufacturerService } from 'src/app/services/manufacturer.service';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styles: []
})

export class EditVehicleComponent implements OnInit {

  vehicles: Vehicle;
  editForm: FormGroup;
  categories: Array<Category> = [];
  manufacturers: Array<Manufacturer> = [];
  models: Array<Model> = [];
  selectedCategory;
  selectedModel;
  selectedManufacturer;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private service: VehicleService,
    private categoryService: CategoryService,
    private manufactureService: ManufacturerService,
    private modelService: ModelService) { }

  ngOnInit() {

    const idVehicle = localStorage.getItem('editVehicleId');

    this.categoryService.findAll().subscribe(data => (this.categories = data));
    this.manufactureService.findAll().subscribe(data => (this.manufacturers = data));
    this.modelService.findAll().subscribe(data => (this.models = data));

    if ( !idVehicle ) {
      alert('Ação inválida');
      this.router.navigate(['list-vehicle']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      license: ['', Validators.required],
      category: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required]
    });

    this.service.findById(idVehicle)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  redirect() {
    this.router.navigate(['list-vehicle']);
  }

  onSubmit() {

    this.editForm.value.category = this.categories[this.selectedCategory];
    this.editForm.value.make = this.manufacturers[this.selectedManufacturer];
    this.editForm.value.model = this.models[this.selectedModel];

    this.service.update(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        this.redirect();
        swal({
          position: 'top',
          type: 'success',
          title: 'Veículo atualizado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        alert(error);
      });
  }

}
