import { Component, OnInit } from '@angular/core';
// import {DataService} from '../core/service/data.service';
import hospitals = Authentication.hospitals;
import {HttpBackend, HttpClient} from '@angular/common/http';
import {NotificationService} from '../core/notification/notification.service';
import DataPayload = Authentication.DataPayload;

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  databool:boolean;
  Hospitals: hospitals[];
  data : DataPayload;
  constructor(handler: HttpBackend, private ns: NotificationService, private httpClient:HttpClient){
    this.httpClient = new HttpClient(handler);
    this.httpClient.get<DataPayload>('https://covidapi.naxa.com.np/api/v1/health-facility2/').subscribe(data => {
      console.log(data);
      this.data = data;
      this.Hospitals = this.data.results;
      console.log(this.Hospitals);
      this.databool =true;
    });
  }

  ngOnInit() {
  }

}
