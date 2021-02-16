import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import hospitals = Authentication.hospitals;
import DataPayload = Authentication.DataPayload;
import {NotificationService} from '../core/notification/notification.service';
import {AuthenticationService} from '../core/authentication';
import ProvinceData = Authentication.ProvinceData;
import {timeout, toArray} from 'rxjs/operators';
import {Element} from '@angular/compiler';
import {element} from 'protractor';
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
  provData: ProvinceData;
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
provinceData: ProvinceData[];
  showdivs: boolean;
  total_tested: number;
  total_negative: number;
  total_in_isolation: number;
  provinceName: string;
  total_death: number;
  total_recovered: number;
  total_positive: number;
  num_of_isolation_bed: number;
  occupied_isolation_bed: number;
  facility_count: number;


@ViewChild('selectIt', {static: false})
public mydiv: ElementRef;
  constructor(handler: HttpBackend, private ns: NotificationService, private apicall: AuthenticationService) {
    this.apicall.getProvinceData().subscribe(data => {
      this.provinceData = data;
      console.log(this.provinceData);
      this.showstuff = true;
    });
    // this.httpClient = new HttpClient(handler);
    // this.httpClient.get<DataPayload>('https://covidapi.mohp.gov.np/api/v1/health-facility2/').subscribe(data => {
    //   console.log(data);
    //   this.data = data;
    //   this.Hospitals = this.data.results;
    //   this.showstuff = true;
    //   console.log(this.Hospitals);
    // });
  }
  showProvincedata1(mouse) {
    const id = mouse.path.some(elem => {
      if (elem.id) {
      if (elem.id.includes('pradesh')) {
        return elem.id;
      }}
    });
    if (id) {
   mouse.path.forEach(papa => {
     if (papa.id) {
       if (papa.id.includes('pradesh')) {
         const pradesh = papa.id;
         const provinceNum = pradesh.split('-')[1];
         const provData1 = this.provinceData.filter(elem => elem.province_id == provinceNum);
         this.provData = provData1[0];

         if (this.provData != null) {
           this.total_in_isolation = this.provData.total_in_isolation;
           this.total_positive = this.provData.total_positive;
           this.total_tested = this.provData.total_tested;
           this.total_negative = this.provData.total_negative;
           this.total_death = this.provData.total_death;
           this.total_recovered = this.provData.total_recovered;
           this.num_of_isolation_bed = this.provData.num_of_isolation_bed;
           this.occupied_isolation_bed = this.provData.occupied_isolation_bed;
           this.facility_count = this.provData.occupied_isolation_bed;
           this.provinceName = this.provData.province_name;
           const myelem = document.getElementById('selectIt');
           myelem.style.position = 'absolute';
           myelem.style.left = mouse.pageX + 'px';
           myelem.style.top = mouse.pageY + 'px';
           myelem.style.display = 'block';
         }
       }


     }


   });
 } else if ((document.activeElement === document.getElementById('nepalmapAnchor'))) {
      const myelem = document.getElementById('selectIt');
      myelem.style.display = 'none';
    }

    else {
   const myelem = document.getElementById('selectIt');
   myelem.style.display = 'none';
 }

  }

  hideme(hideme){
    const myelem = document.getElementById('selectIt');
    myelem.style.display = 'none';
  }
//   showProvincedata(mouse: MouseEvent, provinceNum,diva) {
//     const div = document.getElementById(diva);
//     const provData1 = this.provinceData.filter(elem => elem.province_id == provinceNum);
//     this.provData = provData1[0];
//     if (this.provData != null) {
//       this.total_in_isolation = this.provData.total_in_isolation;
//       this.total_positive = this.provData.total_positive;
//       this.total_tested = this.provData.total_tested;
//       this.total_negative =  this.provData.total_negative;
//       this.total_death = this.provData.total_death;
//       this.total_recovered = this.provData.total_recovered;
//       this.num_of_isolation_bed = this.provData.num_of_isolation_bed;
//       this.occupied_isolation_bed = this.provData.occupied_isolation_bed;
//       this.facility_count = this.provData.occupied_isolation_bed;
//       this.provinceName = this.provData.province_name;
//       const myelem = document.getElementById('selectIt');
//       myelem.style.position = 'absolute';
//       myelem.style.left = mouse.pageX + 'px';
//       myelem.style.top = mouse.pageY + 'px';
//       myelem.style.display = 'block';
//     }
//     else{
//       const myelem = document.getElementById('selectIt');
//       myelem.style.display = 'none';
//     }
//
//   }
//
//   hideProvincedata(event12:MouseEvent,diva) {
//     // console.log(event12.relatedTarget.id);
//     // console.log(event12.target.id);
//     if(event12.relatedTarget.id =='' && event12.target.id == '' || (event12.relatedTarget.id =='Layer_1' || event12.target.id =='Layer_1')){
//        console.log("out");
//     }
//     else{
//        console.log("in")
//     }
// }
//
// mousMovedata(datala){
//     console.log(datala);
// }


  ngOnInit() {

  }

  gotoTop() {
    document.documentElement.scrollTop = 0;
  }
  // showDistrictforMap(val1) {
  //   this.selectevent = val1.target as Element;
  //   this.valX = (this.selectevent.id == '' ? this.selectevent.textContent : this.selectevent.id).trim().toLocaleLowerCase();
  //   if (this.valX == 'bkt') {
  //     this.valX = 'bhaktapur';
  //   }
  //   if (this.valX == 'ktm') {
  //     this.valX = 'kathmandu';
  //   }
  //   console.log(this.valX);
  //   const hosp = this.Hospitals.filter(hospital => hospital.district_name.toLocaleLowerCase() == this.valX);
  //   if (hosp.length != 0) {
  //     for (const value of hosp) {
  //       if (value.district_name.toLocaleLowerCase() == this.valX) {
  //         this.Type = value.category_name ;
  //         this.Number = value.contact_num;
  //         this.HospitalName = value.name;
  //         this.District = value.district_name ;
  //         this.ns.success1('\n' + value.contact_num == 'nan' ? 'N/A' : value.contact_num + '\n' + this.District + '\n' + value.municipality_name, this.HospitalName);
  //         this.dataentry = true;
  //         // console.log(val1.screenX);
  //         // console.log(val1.screenY);
  //         // const shand = document.getElementById('selectIt');
  //         // shand.style.position = 'absolute';
  //         // shand.style.left = val1.pageX + 'px';
  //         // shand.style.top =  val1.pageY + 'px';
  //         // setTimeout(()=>{
  //         //   shand.style.display = 'block';
  //         // },100)
  //
  //       }
  //     }
  //   } else {
  //     this.ns.success1('No result found', 'Sorry!!');
  //   }


//}
}
