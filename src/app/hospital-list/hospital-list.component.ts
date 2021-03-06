import {Component, OnInit, PipeTransform, ViewChild} from '@angular/core';
import hospitals = Authentication.hospitals;
import {HttpBackend, HttpClient} from '@angular/common/http';
import {NotificationService} from '../core/notification/notification.service';
import DataPayload = Authentication.DataPayload;
import * as jQuery from 'jquery';
import 'bootstrap-notify';
const $: any = jQuery;

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  filtertext = '';
  databool: boolean;
  Hospitals: hospitals[];
  data: DataPayload;
  constructor(handler: HttpBackend, private ns: NotificationService, private httpClient: HttpClient) {
    this.httpClient = new HttpClient(handler);
    this.httpClient.get<DataPayload>('https://covidapi.mohp.gov.np/api/v1/health-facility2/').subscribe(data => {
      this.data = data;
      this.Hospitals = this.data.results;
      this.databool = true;
    });
  }

  ngOnInit() {
  }
}
