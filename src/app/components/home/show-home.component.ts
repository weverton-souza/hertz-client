import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-home',
  templateUrl: 'show-home.component.html',
  styles: []
})

export class ShowHomeComponent implements OnInit {

  constructor(private router: Router) { }

  redirect(route) {
    this.router.navigate([route]);
  }

  ngOnInit() {

  }
}
