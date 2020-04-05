import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import hospitals = Authentication.hospitals;
import DataPayload = Authentication.DataPayload;
import {NotificationService} from '../core/notification/notification.service';
declare var $: any;


@Component({
  selector: 'app-nepal-map',
  templateUrl: './nepal-map.component.html',
  styleUrls: ['./nepal-map.component.css']
})
export class NepalMapComponent implements OnInit {
dataentry: boolean;
showstuff: boolean;
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
  constructor(handler: HttpBackend, private ns: NotificationService) {
    this.httpClient = new HttpClient(handler);
    this.httpClient.get<DataPayload>('https://covidapi.naxa.com.np/api/v1/health-facility2/').subscribe(data => {
      console.log(data);
      this.data = data;
      this.Hospitals = this.data.results;
      this.showstuff = true;
      console.log(this.Hospitals);
    });
  }

  ngOnInit() {

  }

  gotoTop() {
    document.documentElement.scrollTop = 0;
  }
  showDistrictforMap(val1: MouseEvent) {
    this.selectevent = val1.target as Element;

    const hosp = this.Hospitals.filter(hospital => hospital.district_name.toLocaleLowerCase() == this.selectevent.id);
    if (hosp.length != 0) {
      for (const value of hosp) {
        if (value.district_name.toLocaleLowerCase() == this.selectevent.id) {
          this.Type = value.category_name ;
          this.Number = value.contact_num;
          this.HospitalName = value.name;
          this.District = value.district_name ;
          this.ns.success1('\n' + value.contact_num =='nan' ? 'N/A' : value.contact_num + '\n' + this.District + '\n' + value.municipality_name, this.HospitalName);
          this.dataentry = true;
          // console.log(val1.screenX);
          // console.log(val1.screenY);
          // const shand = document.getElementById('selectIt');
          // shand.style.position = 'absolute';
          // shand.style.left = val1.pageX + 'px';
          // shand.style.top =  val1.pageY + 'px';
          // setTimeout(()=>{
          //   shand.style.display = 'block';
          // },100)

        }
      }
    } else {
      this.ns.success1('No result found','Sorry!!');
    }


}

showStats() {

}
removeStats() {
this.dataentry = false;
this.val = 'none';

// setTimeout(() => {
//   const shand = document.getElementById('selectIt');
//   shand.style.display = 'none';
// }, 3000);

}
}
