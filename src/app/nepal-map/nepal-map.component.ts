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
    this.httpClient.get<DataPayload>('https://covidapi.mohp.gov.np/api/v1/health-facility2/').subscribe(data => {
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
  showDistrictforMap(val1) {
    this.selectevent = val1.target as Element;
    this.valX = (this.selectevent.id == '' ? this.selectevent.textContent : this.selectevent.id).trim().toLocaleLowerCase();
    if(this.valX=='bkt'){
      this.valX='bhaktapur';
    }
    if(this.valX=='ktm'){
      this.valX='kathmandu'
    }
    console.log(this.valX);
    const hosp = this.Hospitals.filter(hospital => hospital.district_name.toLocaleLowerCase() == this.valX);
    if (hosp.length != 0) {
      for (const value of hosp) {
        if (value.district_name.toLocaleLowerCase() == this.valX) {
          this.Type = value.category_name ;
          this.Number = value.contact_num;
          this.HospitalName = value.name;
          this.District = value.district_name ;
          this.ns.success1('\n' + value.contact_num == 'nan' ? 'N/A' : value.contact_num + '\n' + this.District + '\n' + value.municipality_name, this.HospitalName);
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
      this.ns.success1('No result found', 'Sorry!!');
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
