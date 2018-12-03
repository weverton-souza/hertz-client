import { Component, OnInit } from '@angular/core';
import { TraffictTicket } from '../../model/traffictTicket';
import { TraffictTicketService } from '../../services/traffictTicket.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-traffictticket',
  templateUrl: './list-traffictTicket.component.html',
  styles: []
})
export class ListTraffictTicketComponent implements OnInit {

  traffictTickets: TraffictTicket[];
  constructor(private router: Router, private service: TraffictTicketService) { }

  ngOnInit() {
    this.service.findAll().subscribe(data => (this.traffictTickets = data));
  }

  delete(traffictTicket: TraffictTicket): void {
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
        this.service.delete(traffictTicket.id).subscribe(data => {
          this.traffictTickets = this.traffictTickets.filter(c => c !== traffictTicket);
        });
        swal('Pronto!', 'Multa excluida', 'success');
      }
    });
  }

  update(traffictTicket: TraffictTicket): void {
    localStorage.removeItem('editTraffictTicketId');
    localStorage.setItem('editTraffictTicketId', traffictTicket.id);
    this.router.navigate(['edit-traffictTicket']);
  }

  add(): void {
    this.router.navigate(['add-traffictTicket']);
  }

}
