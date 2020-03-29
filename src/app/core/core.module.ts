import { CommonModule } from '@angular/common';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import {
  AuthenticationGuard,
  AuthenticationService
} from './authentication';
import {
  ApiPrefixInterceptor,
  ErrorHandlerInterceptor,
  HttpService
} from './http';
import { LocalStorageService } from './local-storage.service';
import { RouteReusableStrategy } from './route-reusable-strategy';
import {
  ErrorMessageService,
  UserService,
  UtilService
} from './service';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  declarations: [],
  providers: [
    LocalStorageService,
    AuthenticationService,
    AuthenticationGuard,
    ApiPrefixInterceptor,
    ErrorHandlerInterceptor,
    UserService,
    UtilService,
    ErrorMessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    {
      provide: HttpClient,
      useClass: HttpService
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy
    }
  ]
})
export class CoreModule {}
