import { Component, Inject, OnInit } from '@angular/core';

import { AuthenticationService } from '../core';
import { DOCUMENT } from '@angular/common';
import misinformation = Authentication.misinformation;


@Component({
  selector: 'app-view-misinformation',
  templateUrl: './view-misinformation.component.html',
  styleUrls: ['./view-misinformation.component.css']
})
export class ViewMisinformationComponent implements OnInit {
  misinformation: misinformation[];
  colorbox: string[] = ['dark', 'dark', 'light', 'light'];
  textbox:string[]=['white','white','black','black']

  constructor(private apicall: AuthenticationService) {
   this.apicall.showmisinformation().subscribe(data => {
     console.log(data);
     this.misinformation = data;
     console.log(this.misinformation);
   });

   }
gotoUrl(urlToOpen: string) {
  let url = '';
  if (!/^http[s]?:\/\//.test(urlToOpen)) {
    url += 'http://';
  }

  url += urlToOpen;

  window.open(url, '_blank');

}

  ngOnInit() {
  }

}
