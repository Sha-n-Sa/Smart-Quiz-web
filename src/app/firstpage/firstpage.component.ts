import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Logger } from '../shared/logger.service';
import { AuthService } from '../navbar/auth.service';

import { NavbarService } from '../navbar/navbar.service';

@Component({
  selector: 'firstpage',
  templateUrl: './firstpage.view.html',
  styleUrls: ['./firstpage.view.css'],
})
export class FirstpageComponent implements OnInit{ 
  
  constructor( public nav: NavbarService ) {}

  ngOnInit() {
    this.nav.hide();
  }
/*closeResult: string;

  constructor(
    private modalService: NgbModal,
    private _auth: AuthService,
    private _log: Logger
  ) {}

  open(content) {
    this._log['log']( "Open Modal" );
    this.modalService.open(content).result.then((result) => {
      this._log['log']( "Modal:" );
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this._log['log']( "Close Modal:" );
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    this._log['log']( "Dismiss Modal:" );
    this._log['log']( reason );
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  } */
}

