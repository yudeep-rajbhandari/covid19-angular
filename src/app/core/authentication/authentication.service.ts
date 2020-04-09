import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { LocalStorageService } from '../local-storage.service';

const credentialsKey = 'credentials';

/**
 * Provides a base for authentication workflow.
 * The Credentials interface as well as login/logout methods should be replaced with proper implementation.
 */
@Injectable()
export class AuthenticationService {
  private _credentials: Authentication.Credentials | null;
  public credentials$ = new EventEmitter<Authentication.Credentials>();

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    const savedCredentials = this.localStorageService.getItem(credentialsKey);
    if (savedCredentials) {
      this._credentials = JSON.parse(savedCredentials);
    }
  }

  login(
    payload: Authentication.LoginPayload
  ): Observable<Authentication.Credentials> {
    return this.httpClient.post('/login', payload).pipe(
      map((body: Authentication.Credentials) => {
        this.setCredentials(body);
        return body;
      })
    );
  }

  signup(
    payload: Authentication.SignupPayload
  ): Observable<Authentication.User> {
    return this.httpClient.post('/signup', payload).pipe(
      map((body: Authentication.User) => {
        return body;
      })
    );
  }

  saveMisinformation(
    payload: Authentication.misinformation
  ): Observable<Authentication.User> {
    return this.httpClient.post('/misinformation', payload).pipe(
      map((body: Authentication.User) => {
        return body;
      })
    );
  }
  saveSuspectedcase(
    payload: Authentication.suspectedcase
  ): Observable<Authentication.User> {
    return this.httpClient.post('cases', payload).pipe(
      map((body: Authentication.User) => {
        return body;
      })
    );
  }

  saveCoronaFear(
    payload: Authentication.coronaFear
  ): Observable<Authentication.User> {
    return this.httpClient.post('coronaFear', payload).pipe(
      map((body: Authentication.User) => {
        return body;
      })
    );
  }

  getCoronaFear(): Observable<Authentication.coronaFear[]> {
    return this.httpClient.get('coronaFear').pipe(
      map((body: Authentication.coronaFear[]) => {
        return body;
      })
    );
  }
  getProvinceData(): Observable<Authentication.ProvinceData[]> {
    return this.httpClient.get('provinceData').pipe(
      map((body: Authentication.ProvinceData[]) => {

        return body;
      })
    );
  }


  saveblackmarketing(
    payload: Authentication.blackMarketing
  ): Observable<Authentication.User> {
    return this.httpClient.post('blackmarketing', payload).pipe(
      map((body: Authentication.User) => {
        return body;
      })
    );
  }

  getMisinformation(): Observable<Authentication.misinformation[]> {
    return this.httpClient.get('/misinformation').pipe(
      map((body: Authentication.misinformation[]) => {
        return body;
      })
    );
  }
  showmisinformation() {
    return this.httpClient.get<Authentication.misinformation[]>('/misinformation' );
  }
  showblackmarketing() {
    return this.httpClient.get<Authentication.blackMarketing[]>('blackMarketing' );
  }
  showSuspectablecases() {
    return this.httpClient.get<Authentication.suspectedcase[]>('cases' );
  }
  getNepalLivedata() {
    return this.httpClient.get<Authentication.nepaldata>('update/Nepal' );
  }

  getWorldData() {
    return this.httpClient.get<Authentication.SAARCdata[]>('update/SAARC');
  }

  /**
   * Logs out the user and clear credentials.
   * @return {Observable<boolean>} True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    return this.httpClient
      .post('/logout', {
        sessionId: this.credentials.session
      })
      .pipe(
        map(() => {
          this.setCredentials();
          return true;
        })
      );
  }

  /**
   * Checks is the user is authenticated.
   * @return {boolean} True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    return !!this.credentials;
  }

  /**
   * Gets the user credentials.
   * @return {Credentials} The user credentials or null if the user is not authenticated.
   */
  get credentials(): Authentication.Credentials | null {
    return this._credentials;
  }

  /**
   * Get the auth token.
   * @return {string} The auth token is null if user is not authenticated.
   */
  get accessToken(): string | null {
    return this.credentials ? this.credentials.accessToken : null;
  }

  /**
   * Sets the user credentials.
   * @param {Credentials=} Authentication.Credentials The user credentials.
   */
  private setCredentials(credentials?: Authentication.Credentials) {
    this._credentials = credentials || null;
    if (credentials) {
      this.localStorageService.setItem(
        credentialsKey,
        JSON.stringify(credentials)
      );
      this.credentials$.emit(this._credentials);
    } else {
      this.localStorageService.clearItem(credentialsKey);
    }
  }
}
