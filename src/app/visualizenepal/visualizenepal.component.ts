import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core';
import nepaldata = Authentication.nepaldata;
import SAARCdata = Authentication.SAARCdata;
import { HttpClient, HttpBackend } from '@angular/common/http';


@Component({
  selector: 'app-visualizenepal',
  templateUrl: './visualizenepal.component.html',
  styleUrls: ['./visualizenepal.component.css']
})
export class VisualizenepalComponent implements OnInit {

  isDataAvailable: boolean;
  isSAARCDataAvailable: boolean;
  positive: number;
  negative: number;
  recovered: number;


  data: nepaldata;

  mydata: any = [];
  mydata1: any = [];
  mydata2: any = [];
  SAARCdata: SAARCdata[];
  acitveCases: number[];
  totalDeaths: number[];
  // tslint:disable-next-line:max-line-length
  chart = {title: 'COVID-19 Positive Cases in Nepal', type: 'PieChart', data: this.mydata, title1: 'COVID-19 Testing and Results in Nepal', title2: 'COVID-19 affected cases one in million in SAARC', data1: this.mydata1, type2: 'ColumnChart', data2: this.mydata2, column2: ['Country', 'Cases'],
    options: {
    width: 600,
      height: 440,
      chartArea: {left: 0},
      legend: {
        position: 'top'}},
    options1: {
      width: 500,
      height: 440,
      // chartArea:{left:0},
      legend: {
        position: 'top'}},
  options2: {
    height: 440,
    width: 500,
     chartArea: {left: 0},
    legend: {
      position: 'top'}
  }};


  constructor(private apicall: AuthenticationService, private handler: HttpBackend,  private httpClient: HttpClient) {

    this.httpClient = new HttpClient(handler);
    this.httpClient.get<nepaldata>('https://covidapi.naxa.com.np/api/v1/stats/?format=json').subscribe(data => {
      console.log(data);
      this.data = data;
      this.recovered = data.confirmed - data.isolation;
      this.positive = data.confirmed;
      this.negative = data.tested - data.confirmed;
      this.mydata.push(['Total Positive', parseInt(String(data.confirmed), 10)]);
      this.mydata.push(['Recovered', this.recovered]);
      this.mydata.push(['Isolation', parseInt(String(data.isolation), 10)]);
      this.mydata1.push(['Total Tested', parseInt(String(data.tested), 10)]);
      this.mydata1.push(['Positive', this.positive]);
      this.mydata1.push(['Negative', this.negative]);
      console.log('mydata', this.mydata);
      this.isDataAvailable = true;
    });
    // this.apicall.getNepalLivedata().subscribe(data => {
    //   console.log(data);
    //   this.mydata = this.mydata || [];
    //   this.data = data;
    //   this.mydata.push(['Total Positive', parseInt(String(data.positive), 10)]);
    //   this.mydata.push(['Recovered', parseInt(String(data.recovered), 10)]);
    //   this.mydata.push(['Isolation', parseInt(String(data.isolation), 10)]);
    //   this.mydata1.push(['Total Tested', parseInt(String(data.total_Samples_Tested), 10)]);
    //   this.mydata1.push(['Positive', parseInt(String(data.positive), 10)]);
    //   this.mydata1.push(['Negative', parseInt(String(data.negative), 10)]);
    //   // this.mydata = [['Total Tested', data.Total_Samples_Tested], ['Positive', data.Positive], ['Negative', data.Negative]];
    //   console.log('mydata', this.mydata);
    //   this.isDataAvailable = true;
    // });
    this.apicall.getWorldData().subscribe(data => {
      this.acitveCases = this.acitveCases || [];
      this.totalDeaths = this.totalDeaths || [];
      this.SAARCdata = data;
      this.SAARCdata.map(elem => {
    this.mydata2.push([elem.country, parseFloat(String(elem.TotIn1M))]);
      });
      this.isSAARCDataAvailable = true;
    });



  }






  ngOnInit() {
  }




}
