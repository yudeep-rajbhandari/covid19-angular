import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private modal: NgbModal) { }
  @ViewChild('content', {static: false})
  private content:any;
  @ViewChild('content1', {static: false})
  private content1:any;


  ngOnInit() {
  }


  openit() {
        this.modal.open(this.content, {ariaLabelledBy: 'modal-basic-title'});
  }
  openit1() {
    this.modal.open(this.content1, {ariaLabelledBy: 'modal-basic-title'});
  }

}
