import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../core/authentication';
import coronaFear = Authentication.coronaFear;

@Component({
  selector: 'app-getcorona-fear',
  templateUrl: './getcorona-fear.component.html',
  styleUrls: ['./getcorona-fear.component.css']
})
export class GetcoronaFearComponent implements OnInit {
  coronaFeardata: coronaFear[];
  colorbox: string[];
  textbox:string[];
  marketing:boolean;

  constructor(private apicall: AuthenticationService) {
    // this.apicall.getCoronaFear().subscribe(data => {
      this.coronaFeardata = [];
      if (this.coronaFeardata.length < 3) {
        this.colorbox = ['dark', 'light', 'dark', 'light']
        this.textbox =  ['white', 'black', 'white', 'black'];
      } else {
        this.colorbox= ['dark', 'dark', 'light', 'light'];
        this.textbox =  ['white', 'white', 'black', 'black'];
      }
      this.marketing = true;
    // });

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
