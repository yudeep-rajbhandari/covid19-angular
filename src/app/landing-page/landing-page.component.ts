import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import {NepalMapComponent} from '../nepal-map/nepal-map.component';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private modal: NgbModal, private router: Router, private viewportScroller: ViewportScroller) { }
  @ViewChild('content', {static: false})
  private content: any;
  @ViewChild('content1', {static: false})
  private content1: any;
  @ViewChild('#cold', {static: false})
  private table: NepalMapComponent;
  date= new Date().toDateString();

  ngOnInit() {

  }


  openit() {
        this.modal.open(this.content, {ariaLabelledBy: 'modal-basic-title'});
  }
  openit1() {
    this.modal.open(this.content1, {ariaLabelledBy: 'modal-basic-title'});
  }
  openit2() {
    this.router.navigate(['visualizeNepal']);

  }

  gotoMap() {
    document.querySelector('#nepalmapAnchor').scrollIntoView({ behavior: 'smooth', block: 'center' });
   // this.viewportScroller.scrollToAnchor('nepalmapAnchor');

  }
  gotoVisualize() {
    document.querySelector('#visualizAnchor').scrollIntoView({ behavior: 'smooth', block: 'center' });
   // this.viewportScroller.scrollToAnchor('nepalmapAnchor');

  }
  gotoCoronaFear(){
    document.querySelector('#CoronaAnchor').scrollIntoView({ behavior: 'smooth', block: 'center'});
  }

  gotoAqi(){
    document.querySelector('#aqiAnchor').scrollIntoView({ behavior: 'smooth', block: 'center'});
  }
}
