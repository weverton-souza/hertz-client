import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
import swal from 'sweetalert2';
import { Vehicle } from 'src/app/model/vehicle';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/model/category';
import { ManufacturerService } from 'src/app/services/manufacturer.service';
import { ModelService } from 'src/app/services/model.service';
import { Manufacturer } from 'src/app/model/manufacturer';
import { Model } from 'src/app/model/model';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: 'add-vehicle.component.html',
  styles: []
})
export class AddVehicleComponent implements OnInit {

  vehicles: Vehicle[];
  categories: Array<Category> = [];
  manufacturers: Array<Manufacturer> = [];
  models: Array<Model> = [];
  category: Category;
  addForm: FormGroup;
  selectedCategory;
  selectedModel;
  selectedManufacturer;

  constructor(private formBuilder: FormBuilder, private router: Router,
  private service: VehicleService,
  private categoryService: CategoryService,
  private manufactureService: ManufacturerService,
  private modelService: ModelService) { }

  ngOnInit() {
    this.categoryService.findAll().subscribe(data => (this.categories = data));
    this.manufactureService.findAll().subscribe(data => (this.manufacturers = data));
    this.modelService.findAll().subscribe(data => (this.models = data));

    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      license: ['', Validators.required],
      category: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required]
    });
  }

  redirect() {
    this.router.navigate(['list-vehicle']);
  }

  onSubmit() {

    this.addForm.value.category = this.categories[this.selectedCategory];
    this.addForm.value.make = this.manufacturers[this.selectedManufacturer];
    this.addForm.value.model = this.models[this.selectedModel];

    this.service.save( this.addForm.value )
      .subscribe(data => {
        this.redirect();
        swal({
          position: 'top',
          type: 'success',
          title: 'Veículo criado!',
          showConfirmButton: false,
          timer: 1500
        });
      });
  }

}
