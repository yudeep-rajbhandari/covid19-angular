import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core';
import nepaldata = Authentication.nepaldata;
import SAARCdata = Authentication.SAARCdata;


@Component({
  selector: 'app-visualizenepal',
  templateUrl: './visualizenepal.component.html',
  styleUrls: ['./visualizenepal.component.css']
})
export class VisualizenepalComponent implements OnInit {

  isDataAvailable: boolean;
  isSAARCDataAvailable: boolean;


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
    height: 340},
  options2: {
    height: 300
  }};


  constructor(private apicall: AuthenticationService) {
    this.apicall.getNepalLivedata().subscribe(data => {
      console.log(data);
      this.mydata = this.mydata || [];
      this.data = data;
      this.mydata.push(['Total Positive', parseInt(String(data.Positive), 10)]);
      this.mydata.push(['Recovered', parseInt(String(data.Recovered), 10)]);
      this.mydata.push(['Isolation', parseInt(String(data.Isolation), 10)]);
      this.mydata1.push(['Total Tested', parseInt(String(data.Total_Samples_Tested), 10)]);
      this.mydata1.push(['Positive', parseInt(String(data.Positive), 10)]);
      this.mydata1.push(['Negative', parseInt(String(data.Negative), 10)]);
      // this.mydata = [['Total Tested', data.Total_Samples_Tested], ['Positive', data.Positive], ['Negative', data.Negative]];
      console.log('mydata', this.mydata);
      this.isDataAvailable = true;
    });
    this.apicall.getWorldData().subscribe(data => {
      this.acitveCases = this.acitveCases || [];
      this.totalDeaths = this.totalDeaths || [];
      console.log(data);
      this.SAARCdata = data;
      this.SAARCdata.map(elem => {
  this.mydata2.push([elem.country, parseFloat(String(elem.TotIn1M))]);
  console.log(elem.TotIn1M);
      });
      this.isSAARCDataAvailable = true;

    });



  }






  ngOnInit() {
  }




}
