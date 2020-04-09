import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../core';
import { finalize } from 'rxjs/operators';
import { NotificationService } from '../core/notification/notification.service';

@Component({
  selector: 'app-corona-fear',
  templateUrl: './corona-fear.component.html',
  styleUrls: ['./corona-fear.component.css']
})
export class CoronaFearComponent implements OnInit {
  signupForm: FormGroup;
  isLoading = false;
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private ns: NotificationService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  signup() {
    this.isLoading = true;
    this.authenticationService
      .saveCoronaFear(this.signupForm.value)
      .pipe(
        finalize(() => {
          this.signupForm.markAsPristine();
          this.isLoading = false;
        })
      )
      .subscribe(
        (user: Authentication.User) => {
          this.router.navigate(['/homepage']);
          this.ns.success('Upload successful');
        },
        (error: any) => {
          this.ns.error('Oops something went wrong!');
        }
      );
  }

  private createForm() {
    this.signupForm = this.formBuilder.group({
      location: ['', [Validators.required]],
      responsibleHospital: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      age: ['', [Validators.required]],
      description: ['', [Validators.required]],
      statuses: ['', [Validators.required]]
    });
  }


}
