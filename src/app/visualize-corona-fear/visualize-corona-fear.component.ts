import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from '../core/authentication';
import coronaFear = Authentication.coronaFear;
import { HttpClient, HttpBackend } from '@angular/common/http';
import nepaldata = Authentication.nepaldata;
import {GoogleChartComponent} from 'angular-google-charts';
import {Router} from '@angular/router';
import {timeout} from 'rxjs/operators';


@Component({
  selector: 'app-visualize-corona-fear',
  templateUrl: './visualize-corona-fear.component.html',
  styleUrls: ['./visualize-corona-fear.component.css']
})
export class VisualizeCoronaFearComponent implements OnInit {

  @ViewChild('googleChartComponent', {static: false})
  googleChartComponent: GoogleChartComponent;


  isDataAvailable: boolean;
   death = 0;
   Haffected = 0;
  affected = 0;
  Cdeath = 0;


  data: coronaFear;
  nepaldata: nepaldata;
  mydata: any = [];
  thisdata:boolean;

  // tslint:disable-next-line:max-line-length
  chart = {title: 'COVID-19 Nepal', type: 'ColumnChart', data: this.mydata, columns: ['Causes', 'Cases'],
    options: {
      width: 490,
      height: 400,
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
      chartArea: {left: 0},
      legend: {
        position: 'top'},
      vAxis: {textPosition:'in', title: 'Milliamp Hours' , titleTextStyle: {color: '#FF0000'}}
        },
    };


  constructor(private apicall: AuthenticationService, private handler: HttpBackend,  private httpClient: HttpClient, private router: Router) {

    this.httpClient = new HttpClient(handler);
    this.httpClient.get<nepaldata>('https://covidapi.mohp.gov.np/api/v1/stats/?format=json').subscribe(data => {
      this.nepaldata = data;
      this.Cdeath = this.nepaldata.death;
      this.mydata.unshift(['Death due to Corona', parseInt(String(this.Cdeath), 10)]);
      this.thisdata = true;
    });
    this.apicall.getCoronaFear().subscribe(data => {

      // tslint:disable-next-line:no-shadowed-variable
      data.map(element => {
        if (element.statuses == 'Dead') {
          this.death++;

        }
        if (element.statuses == 'Highly affected') {
          this.Haffected++;
        }
        if (element.statuses == 'Affected') {
          this.affected++;
        }
      });
      this.mydata.push(['Death due to fear of Corona', parseInt(String(this.death), 10)]);
      this.mydata.push(['Higly affected due to Corona', parseInt(String(this.Haffected), 10)]);
      this.mydata.push(['Affected due to Corona', parseInt(String(this.affected), 10)]);
      this.isDataAvailable = true;

      // this.mydata = [['Total Tested', data.Total_Samples_Tested], ['Positive', data.Positive], ['Negative', data.Negative]];

    });


  }
  onSelect(event){
   this.router.navigate(['getcoronaCases']);
  }

  ngOnInit() {
  }





}
