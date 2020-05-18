import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import {NepalMapComponent} from '../nepal-map/nepal-map.component';
import { ViewportScroller } from '@angular/common';
import {DataService} from '../core/service/data.service';
import nepaldata = Authentication.nepaldata;
import {style} from '@angular/animations';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  data: nepaldata;
  getdata: boolean;

  constructor(private modal: NgbModal, private router: Router, private viewportScroller: ViewportScroller, private dataService: DataService) {
    dataService.fetchData().subscribe(data => {
      this.data = data;
      this.getdata = true;
      // this.call();
    });
  }
  @ViewChild('content', {static: false})
  private content: any;
  @ViewChild('content1', {static: false})
  private content1: any;
  @ViewChild('#cold', {static: false})
  private table: NepalMapComponent;
  date = new Date().toDateString();

  ngOnInit() {}

  // call() {
  //   this.counter('count1', 0, this.data.nepal.samples_tested, 5000, 20);
  //   this.counter('count2', 0, this.data.nepal.positive, 1000, 1);
  //   this.counter('count3', 0, this.data.nepal.extra1, 1000, 1);
  // }
  getLockdownday() {
    const d1 = new Date();
    const d2 = new Date('2020/03/24');
    const diff = Math.abs(d1.getTime() - d2.getTime());
    return Math.ceil(diff / (1000 * 3600 * 24));
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
  gotoCoronaFear() {
    document.querySelector('#CoronaAnchor').scrollIntoView({ behavior: 'smooth', block: 'center'});
  }

  gotoAqi() {
    document.querySelector('#aqiAnchor').scrollIntoView({ behavior: 'smooth', block: 'center'});
  }

  counter(id, start, end, duration, ste) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? ste : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
}
