import { Component, OnInit } from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http';
import {NotificationService} from '../core/notification/notification.service';
import AQIdata = Authentication.AQIdata;
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-aqivisualize',
  templateUrl: './aqivisualize.component.html',
  styleUrls: ['./aqivisualize.component.css']
})
export class AQIvisualizeComponent implements OnInit {
  url = '';
  PM10AqiData: AQIdata[];
  PM25AqiData: AQIdata[];
  enddate: string;
  startdate: string;
  ready: boolean;
  ready2: boolean;

  constructor(handler: HttpBackend, private ns: NotificationService, private httpClient: HttpClient) {
    // this.enddate = new Date().toISOString().split('.')[0];
    // this.startdate = this.enddate.split('T')[0] + 'T00:00:00';
    // this.httpClient = new HttpClient(handler);
    // this.httpClient.get<AQIdata[]>('http://pollution.gov.np/gss/api/observation?series_id=523&date_from=' + this.startdate + '&date_to=' + this.enddate).subscribe(data => {
    //   console.log(data);
    //   this.PM10AqiData = data;
    //   this.httpClient.get<AQIdata[]>('http://pollution.gov.np/gss/api/observation?series_id=525&date_from=' + this.startdate + '&date_to=' + this.enddate).subscribe(data => {
    //     console.log(data);
    //     this.PM25AqiData = data;
    //     this.ready = true;
    //     this.data.push(['Today', this.PM25AqiData[this.PM25AqiData.length-1].value, this.PM10AqiData[this.PM10AqiData.length-1].value]);
    //     console.log(this.PM25AqiData[this.PM25AqiData.length-1].value, this.PM10AqiData[this.PM10AqiData.length-1].value)
    //   });
    // });

  }
  title = 'AQI of Kathmandu';
  type = 'LineChart';
  data = [
    ['Jan 1',  152, 72],
      ['Feb 7',  161, 96],
    ['Mar 7',  100,  49],
    ['Apr 1',  106, 37],
    ['Apr 2',  87, 43],
    ['Apr 3',  96, 47],
    ['Apr 4',  113, 43],
    ['Apr 5', 125, 53]
  ];
  columnNames = ['Month', 'PM25', 'PM10'];
  options = {
    width: 800,
    height: 440,
    legend: {
      position: 'top'},
    hAxis: {
      title: 'Month'
    },
    vAxis: {
      title: 'AQI'
    },
  };



  ngOnInit() {

  }

}
