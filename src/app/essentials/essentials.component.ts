import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core';
import Essentials = Authentication.Essentials;

@Component({
  selector: 'app-essentials',
  templateUrl: './essentials.component.html',
  styleUrls: ['./essentials.component.css']
})
export class EssentialsComponent implements OnInit {
  essentials: Essentials[];
  locations: string[];
  ready: boolean;
  selected:string;

  constructor(private apicall: AuthenticationService) {
    this.apicall.getEssentials().subscribe(data => {
      this.essentials = data;
      console.log(this.essentials);
      this.ready = true;
    });
  }

  ngOnInit() {
  }
}


