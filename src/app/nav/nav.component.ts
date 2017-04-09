import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  home: string;
  about: string;
  contact: string;
  constructor() {
    this.home = 'Pradžia';
    this.about = 'Apie';
    this.contact = 'Kontaktai';
  }
  ngOnInit() {
  }

}
