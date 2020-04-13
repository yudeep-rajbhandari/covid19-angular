import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http';
import {NotificationService} from '../core/notification/notification.service';
import {timeout} from 'rxjs/operators';
import {GoogleChartComponent, GoogleChartsModule} from 'angular-google-charts';
import data1 = Authentication.data1;

@Component({
  selector: 'app-aqivisualize',
  templateUrl: './aqivisualize.component.html',
  styleUrls: ['./aqivisualize.component.css']
})
export class AQIvisualizeComponent implements OnInit {

  @ViewChild('chart', {static: false})
  private chart: GoogleChartComponent;
  url = '';
  PM10AqiData: data1;
  currentAQI: number;
  currentPM10: number;
  enddate: string;
  startdate: string;
  ready: boolean;
  ready2: boolean;

  constructor(handler: HttpBackend, private ns: NotificationService, private httpClient: HttpClient) {
    // this.enddate = new Date().toISOString().split('.')[0];
    // this.startdate = this.enddate.split('T')[0] + 'T00:00:00';
    this.httpClient = new HttpClient(handler);
    this.httpClient.get<data1>('https://api.airvisual.com/v2/city?city=Kathmandu&state=Central%20Region&country=Nepal&key=cc48213a-38d8-430f-81a3-5973c871d7b4').subscribe(data => {
      this.currentAQI = data.data.current.pollution.aqius;
      this.currentPM10 = data.data.current.pollution.aqicn;
      this.data.push(['Now(Live)', this.currentAQI, this.currentPM10]);
      this.chart.ngOnChanges();


    });

  }
  title = 'AQI of Kathmandu';
  type = 'LineChart';
  data = [
    ['Jan 1',  152, 72],
      ['Feb 7',  161, 96],
    ['Mar 7',  100,  49],
    ['Apr 3',  96, 47],
    ['Apr 4',  113, 43],
    ['Apr 5', 125, 53],
    ['Apr 8', 142, 72],
    ['Apr 12', 160, 64]
  ];
  columnNames = ['Month', 'PM25', 'PM10'];
  options = {
    legend: {
      position: 'top'},
    hAxis: {
      title: 'Month'
    },
    vAxis: {
      title: 'AQI'
    },
  };

onResize(event) {
this.chart.ngOnChanges();
}

  ngOnInit() {

  }

}
