import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core';
import suspectedcase = Authentication.suspectedcase;

@Component({
  selector: 'app-view-suspectedcases',
  templateUrl: './view-suspectedcases.component.html',
  styleUrls: ['./view-suspectedcases.component.css']
})
export class ViewSuspectedcasesComponent implements OnInit {

  suspectedcases: suspectedcase[];
  colorbox: string[];
  textbox:string[];

  constructor(private apicall: AuthenticationService) {
    this.apicall.showSuspectablecases().subscribe(data => {
      console.log(data);
      this.suspectedcases = data;
      if (this.suspectedcases.length < 3) {
        this.colorbox = ['dark', 'light', 'dark', 'light']
        this.textbox =  ['white', 'black', 'white', 'black'];
      } else {
        this.colorbox = ['dark', 'dark', 'light', 'light'];
        this.textbox =  ['white', 'white', 'black', 'black'];
      }
      console.log(this.suspectedcases);
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
