import { Component, OnInit } from '@angular/core';
import { TraffictTicket } from '../../model/traffictTicket';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TraffictTicketService } from '../../services/traffictTicket.service';
import { Router } from '@angular/router';
import {first} from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-edit-traffictticket',
  templateUrl: './edit-traffictTicket.component.html',
  styles: []
})
export class EditTraffictTicketComponent implements OnInit {

  traffictTicket: TraffictTicket;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: TraffictTicketService) { }

  ngOnInit() {

    const idTraffictTicket = localStorage.getItem('editTraffictTicketId');

    if ( !idTraffictTicket ) {
      alert('Ação inválida');
      this.router.navigate(['list-traffictTicket']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });

    this.service.findById(idTraffictTicket)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  redirect() {
    this.router.navigate(['list-traffictTicket']);
  }

  onSubmit() {
    this.service.update(this.editForm.value)
      .pipe(first())
      .subscribe( data => {
        this.redirect();
        swal({
          position: 'top',
          type: 'success',
          title: 'Multa atualizada com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        alert(error);
      });
  }

}
