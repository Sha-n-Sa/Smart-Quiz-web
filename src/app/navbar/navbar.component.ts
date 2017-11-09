import { Component } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: './navbar.view.html',
  styleUrls: ['./navbar.view.css'],
})
export class NavbarComponent { 

  constructor( public nav: NavbarService ) {}
}