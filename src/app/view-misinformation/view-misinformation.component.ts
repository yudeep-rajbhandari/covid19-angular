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
  textbox: string[] = ['white', 'white', 'black', 'black'];
  marketing: boolean;

  constructor(private apicall: AuthenticationService) {
   this.apicall.showmisinformation().subscribe(data => {
     this.misinformation = data;
     this.marketing = true;
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
