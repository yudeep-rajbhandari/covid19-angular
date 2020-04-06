import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import nepaldata = Authentication.nepaldata;
import hospitals = Authentication.hospitals;

@Injectable()
export class DataService {
sharedData: hospitals[];

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

}
