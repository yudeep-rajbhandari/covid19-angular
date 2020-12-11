import {Component, OnInit, ViewChild} from '@angular/core';
import { AuthenticationService } from '../core';
import nepaldata = Authentication.nepaldata;
import SAARCdata = Authentication.SAARCdata;
import { HttpClient, HttpBackend } from '@angular/common/http';
import {DataService} from  '../core/service/data.service';
import {GoogleChartComponent} from 'angular-google-charts';


@Component({
  selector: 'app-visualizenepal',
  templateUrl: './visualizenepal.component.html',
  styleUrls: ['./visualizenepal.component.css']
})
export class VisualizenepalComponent implements OnInit {
  @ViewChild('graph1', {static: false})
  private graph1: GoogleChartComponent;
  @ViewChild('graph2', {static: false})
  private graph2: GoogleChartComponent;
  @ViewChild('graph3', {static: false})
  private graph3: GoogleChartComponent;

  isDataAvailable: boolean;
  isSAARCDataAvailable: boolean;
  positive: string;
  negative: string;
  recovered: string;
  death: string;


  data: nepaldata;

  mydata: any = [];
  mydata1: any = [];
  mydata2: any = [];
  SAARCdata: SAARCdata[];
  acitveCases: number[];
  totalDeaths: number[];
  // tslint:disable-next-line:max-line-length
  chart = { title: 'COVID-19 Positive Cases in Nepal',
            type: 'PieChart', data: this.mydata,
            title1: 'COVID-19 Testing and Results in Nepal',
            title2: 'COVID-19 death cases one in million in SAARC',
            data1: this.mydata1, type2: 'ColumnChart',
            data2: this.mydata2, column2: ['Country', 'Cases'],
    options: {
      width: 400,
      height: 300,
      chartArea: {left: 0},
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
      legend: {
        position: 'top'}},
    options1: {
      width: 400,
      height: 300,
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
      // chartArea:{left:0},
      legend: {
        position: 'top'}},
  options2: {
    height: 300,
    width: 400,
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
     chartArea: {left: 0},
    legend: {
      position: 'top'}
  }};


  constructor(private apicall: AuthenticationService, private handler: HttpBackend,  private httpClient: HttpClient, private dataService: DataService) {


    this.httpClient = new HttpClient(handler);
    this.dataService.fetchData().subscribe(data => {
      this.data = data;
      this.recovered = data.nepal.extra1;
      this.positive = data.nepal.positive;
      this.negative = data.nepal.negative;
      this.death = data.nepal.deaths;
      // this.mydata.push(['Total Positive', parseInt(String(data.nepal.positive), 10)]);
      this.mydata.push(['Recovered', parseInt(String(data.nepal.extra1), 10)]);
      this.mydata.push(['Active Cases', parseInt(String(data.nepal.positive), 10) - parseInt(String(data.nepal.extra1), 10)]);
//      this.mydata1.push(['Total Tested', parseInt(String(data.nepal.samples_tested), 10)]);
      this.mydata1.push(['Negative', parseInt(String(data.nepal.negative), 10)]);
      this.mydata1.push(['Positive', parseInt(String(data.nepal.positive), 10)]);
      this.mydata.push(['Death', parseInt(String(data.nepal.deaths), 10)]);

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
    this.mydata2.push([elem.country, parseFloat(String(elem.DIn1M))]);
      });
      this.isSAARCDataAvailable = true;
    });



  }






  ngOnInit() {
  }




}
