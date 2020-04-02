import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import hospitals = Authentication.hospitals;
import DataPayload = Authentication.DataPayload;
import {timeout} from 'rxjs/operators';
declare var $: any;


@Component({
  selector: 'app-nepal-map',
  templateUrl: './nepal-map.component.html',
  styleUrls: ['./nepal-map.component.css']
})
export class NepalMapComponent implements OnInit {
dataentry: boolean;
  private httpClient: HttpClient;
  data: DataPayload;
  Hospitals: hospitals[];
  val: string;
  valX: string;
  valY: string;
HospitalName: string;
District: string;
Type: string;
Number: string;
selectevent: Element;

@ViewChild('selectIt', {static: false})
public mydiv: ElementRef;
  constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
    this.httpClient.get<DataPayload>('https://covidapi.naxa.com.np/api/v1/health-facility2/').subscribe(data => {
      console.log(data);
      this.data = data;
      this.Hospitals = this.data.results;
      console.log(this.Hospitals);
    });
  }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip();

  }
  showStats(val1: MouseEvent) {
    this.selectevent = val1.target as Element;
    for (const value of this.Hospitals) {
      if (value.district_name.toLocaleLowerCase() == this.selectevent.id) {
        this.Type = value.category_name ;
        this.Number = value.contact_num;
        this.HospitalName = value.name;
        this.District = value.district_name ;
        this.dataentry = true;
        console.log(val1.screenX);
        console.log(val1.screenY);
        const shand = document.getElementById('selectIt');
        shand.style.position = 'absolute';
        shand.style.left = val1.clientX + 'px';
        shand.style.top =  val1.clientY + 'px';
        timeout(1000);
        shand.style.display = 'block';

      }
    }
}

removeStats() {
this.dataentry = false;
this.val = 'none';
timeout(3000);
  const shand = document.getElementById('selectIt');
  shand.style.display = 'none';
}
}
