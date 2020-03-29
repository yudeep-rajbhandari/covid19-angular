import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../core';
import { finalize } from 'rxjs/operators';
import { NotificationService } from '../core/notification/notification.service';


@Component({
  selector: 'app-suspectedcase',
  templateUrl: './suspectedcase.component.html',
  styleUrls: ['./suspectedcase.component.css']
})
export class SuspectedcaseComponent implements OnInit {
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
      .saveSuspectedcase(this.signupForm.value)
      .pipe(
        finalize(() => {
          this.signupForm.markAsPristine();
          this.isLoading = false;
        })
      )
      .subscribe(
        (user: Authentication.User) => {
          console.log(user);
          this.router.navigate(['/homepage']);
          this.ns.success('Upload successful');
        },
        (error: any) => {
          console.log(`Signup error: ${error}`);
          this.ns.error('Oops something went wrong!');
        }
      );
  }

  private createForm() {
    this.signupForm = this.formBuilder.group({
      period: ['', [Validators.required]],
      symptoms: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      age: ['', [Validators.required]],
      bodyTemperature: ['', [Validators.required]],
      contactFromOutside: ['', [Validators.required]]
    });
  }


}
