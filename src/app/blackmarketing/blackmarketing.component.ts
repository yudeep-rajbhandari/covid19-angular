import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../core/authentication';
import { finalize } from 'rxjs/operators';
import { NotificationService } from '../core/notification/notification.service';

@Component({
  selector: 'app-blackmarketing',
  templateUrl: './blackmarketing.component.html',
  styleUrls: ['./blackmarketing.component.css']
})
export class BlackmarketingComponent implements OnInit {
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
      .saveblackmarketing(this.signupForm.value)
      .pipe(
        finalize(() => {
          this.signupForm.markAsPristine();
          this.isLoading = false;
        })
      )
      .subscribe(
        (user: Authentication.User) => {
          this.ns.success('successful upload!');
          this.router.navigate(['/homepage']);
        },
        (error: any) => {
          this.ns.error('Oops! something went wrong');
<<<<<<< HEAD
          console.log(`Signup error: ${error}`);
=======
>>>>>>> 06ab044366f36d7484c89aa29c2945361ec0d1fa
        }
      );
  }

  private createForm() {
    this.signupForm = this.formBuilder.group({
      productName: ['', [Validators.required]],
      location: ['', [Validators.required]],
      thenPrice: ['', [Validators.required]],
      nowPrice: ['', [Validators.required]],
      comments: ['', []],
    });
  }
}


