import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import nepaldata = Authentication.nepaldata;
import {HttpBackend, HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  private apiData = new BehaviorSubject<nepaldata>(null);
  public apiData$ = this.apiData.asObservable();

  constructor(private handler: HttpBackend,  private httpClient: HttpClient) {

    }

    fetchData() {
      this.httpClient = new HttpClient(this.handler);
      return this.httpClient.get<nepaldata>('https://covid19.mohp.gov.np/covid/api/confirmedcases/?format=json').pipe(data => {
       return data;
      });

  }
  setdata(data){
    this.apiData.next(data);
  }


}

