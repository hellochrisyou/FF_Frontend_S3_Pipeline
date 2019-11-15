import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ACCOUNT_NAME, TOKEN } from '../../shared/var/globals';
import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router';

// https://www.howtographql.com/angular-apollo/5-authentication/
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private _accountName: string = null;

    public get accountName(): string {
        return this._accountName;
    }
    public set accountName(value: string) {
        this._accountName = value;
    }

    private _isAuthenticated = new BehaviorSubject(false);

    get isAuthenticated(): Observable<boolean> {
        return this._isAuthenticated.asObservable();
    }

    constructor(
        private apollo: Apollo,
        private router: Router) {
    }

    saveUserData(accountName: string, token: string) {
        localStorage.setItem(ACCOUNT_NAME, accountName);
        localStorage.setItem(TOKEN, token);
        this.setAccountName(accountName);
    }

    setAccountName(accountName: string) {
        this.accountName = accountName;
        this._isAuthenticated.next(true);
    }

    autoLogin() {
        const accountName = localStorage.getItem(ACCOUNT_NAME);

        if (accountName) {
            this.setAccountName(accountName);
            this.router.navigate(['/home']);
        }
    }
    logout() {
        localStorage.removeItem(ACCOUNT_NAME);
        localStorage.removeItem(TOKEN);
        this.accountName = null;
        this._isAuthenticated.next(false);
        this.apollo.getClient().resetStore();
    }
}