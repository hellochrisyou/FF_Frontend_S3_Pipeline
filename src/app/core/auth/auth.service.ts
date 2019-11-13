import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GC_AUTH_TOKEN, GC_USER_ID } from '../../shared/var/globals';

// https://www.howtographql.com/angular-apollo/5-authentication/
@Injectable()
export class AuthService {

    private userId: string = null;
    private _isAuthenticated = new BehaviorSubject(false);

    constructor() {
    }

    get isAuthenticated(): Observable<any> {
        return this._isAuthenticated.asObservable();
    }

    saveData(id: string, token: string) {

        localStorage.setItem(GC_USER_ID, id);
        localStorage.setItem(GC_AUTH_TOKEN, token);
        this.setUserId(id);
    }

    setUserId(id: string) {
        this.userId = id;

        this._isAuthenticated.next(true);
    }
    logout() {
        localStorage.removeItem(GC_USER_ID);
        localStorage.removeItem(GC_AUTH_TOKEN);
        this.userId = null;

        this._isAuthenticated.next(false);
    }

    login() {
        const id = localStorage.getItem(GC_USER_ID);

        if (id) {
            this.setUserId(id);
        }
    }
}