// import {AuthService} from './core/auth/auth.service';
import { LeagueService } from './service/model/league.service';
import { NotifyService } from './service/emit/notify.service';
import { AfterViewInit, Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { AuthService } from './core/auth/auth.service';
import { authenticateQuery } from './shared/query/authenticateQuery';
import { distinctUntilChanged } from 'rxjs/operators';
import { GC_USER_ID, GC_AUTH_TOKEN } from './shared/var/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  userName: string = '';
  password: string = '';

  condition: boolean = false;
  loggedIn: boolean = false;
  constructor(private leagueService: LeagueService,
    private authService: AuthService
  ) {
    // auth.handleAuthentication();
  }



  ngAfterViewInit() {
    this.authService.isAuthenticated
      .pipe(distinctUntilChanged()) // Only emit when the current value is different than the last
      .subscribe(isAuthenticated => {
        this.loggedIn = isAuthenticated
      });
  }

  saveUserData(id, token) {
    localStorage.setItem(GC_USER_ID, id);
    localStorage.setItem(GC_AUTH_TOKEN, token);
    this.authService.setUserId(id);
  }

  btnClick() {
    console.log('this.condition', this.condition);
    this.condition = !this.condition;
    console.log('this.condition', this.condition);
  }

  logout() {
    this.loggedIn = false;
    this.authService.logout();
  }
}