import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TraffictTicketService } from '../../services/traffictTicket.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-traffictticket',
  templateUrl: 'add-traffictTicket.component.html',
  styles: []
})
export class AddTraffictTicketComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: TraffictTicketService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  redirect() {
    this.router.navigate(['list-traffictTicket']);
  }

  onSubmit() {
    this.service.save( this.addForm.value )
      .subscribe(data => {
        this.redirect();
        swal({
          position: 'top',
          type: 'success',
          title: 'Multa criada!',
          showConfirmButton: false,
          timer: 1500
        });
      });
  }

}
