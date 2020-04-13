import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { AuthenticationService } from '../core';
import Essentials = Authentication.Essentials;

@Component({
  selector: 'app-essentials',
  templateUrl: './essentials.component.html',
  styleUrls: ['./essentials.component.css']
})
export class EssentialsComponent implements OnInit {
  essentials: Essentials[];
  showstuff: boolean;
  locations1: string[] = [];
  locations2: string[] = [];
  locations3: string[] = [];
  grocery: Essentials[];
  fruits: Essentials[];
  medicine: Essentials[];
  local1: string;
  local2: string;
  local3: string;

  ready: boolean;
  selected: string;
  constructor(private apicall: AuthenticationService) {
    this.apicall.getEssentials().subscribe(data => {
      this.essentials = data;
      console.log(this.essentials);
      this.grocery = this.essentials.filter(val => val.Category.toString() === 'Grocery and essential items');
      this.essentials.forEach(ess => {
        ess.arraylocation.forEach(loc => {
          if (!this.locations1.includes(loc.trim())) {
            this.locations1.push(loc.trim());
          }

        });
      });

      this.fruits = this.essentials.filter(val => val.Category.toString() === 'Vegetables, fruits, & poultry');
      this.fruits.forEach(ess => {
        ess.arraylocation.forEach(loc => {
          if (!this.locations2.includes(loc)) {
            this.locations2.push(loc.trim());
          }

        });
      });
      this.medicine = this.essentials.filter(val => val.Category.toString() === 'Medicinal supplies');
      this.medicine.forEach(ess => {
        ess.arraylocation.forEach(loc => {
          if (!this.locations3.includes(loc.trim())) {
            this.locations3.push(loc.trim());
          }

        });
      });


      this.ready = true;
      this.showstuff = true;
    });
  }

  ngOnInit() {


  }


}


