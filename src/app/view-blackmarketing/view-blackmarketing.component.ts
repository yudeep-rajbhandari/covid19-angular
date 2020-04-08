import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core';
import blackMarketing = Authentication.blackMarketing;

@Component({
  selector: 'app-view-blackmarketing',
  templateUrl: './view-blackmarketing.component.html',
  styleUrls: ['./view-blackmarketing.component.css']
})
export class ViewBlackmarketingComponent implements OnInit {
  blackMarketings: blackMarketing[];
  colorbox: string[];
  textbox: string[];
  marketing: boolean;

  constructor(private apicall: AuthenticationService) {
    this.apicall.showblackmarketing().subscribe(data => {
      console.log(data);
      this.blackMarketings = data;
      if (this.blackMarketings.length < 3) {
        this.colorbox = ['dark', 'light', 'dark', 'light'];
        this.textbox =  ['white', 'black', 'white', 'black'];
      } else {
        this.colorbox = ['dark', 'dark', 'light', 'light'];
        this.textbox =  ['white', 'white', 'black', 'black'];
      }
      this.marketing = true;
      console.log(this.blackMarketings);
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
