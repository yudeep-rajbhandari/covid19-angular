import {Component, OnInit, PipeTransform, ViewChild} from '@angular/core';
import hospitals = Authentication.hospitals;
import {HttpBackend, HttpClient} from '@angular/common/http';
import {NotificationService} from '../core/notification/notification.service';
import DataPayload = Authentication.DataPayload;
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import * as jQuery from 'jquery';
import 'bootstrap-notify';
const $: any = jQuery;

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {

  databool: boolean;
  Hospitals: hospitals[];
  data: DataPayload;
  filter = new FormControl('');
search(text: string, pipe: PipeTransform): hospitals[] {
  return this.Hospitals.filter(hos => {
    const term = text.toLocaleLowerCase();
    return hos.name.toLocaleLowerCase().includes(term)
    || pipe.transform(hos.district_name.toLocaleLowerCase()).includes(term)
    || pipe.transform(hos.municipality_name.toLocaleLowerCase()).includes(term);
  });
}
  constructor(handler: HttpBackend, private ns: NotificationService, private httpClient: HttpClient) {
    this.httpClient = new HttpClient(handler);
    this.httpClient.get<DataPayload>('https://covidapi.mohp.gov.np/api/v1/health-facility2/').subscribe(data => {
      console.log(data);
      this.data = data;
      this.Hospitals = this.data.results;
      // this.data.results = this.filter.valueChanges.pipe();
      console.log(this.Hospitals);
      this.databool = true;
    });
  }

  ngOnInit() {

  }

}
