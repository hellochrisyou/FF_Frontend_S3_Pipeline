// import {AuthService} from './core/auth/auth.service';
import { LeagueService } from './service/model/league.service';
import { NotifyService } from './service/emit/notify.service';
import { AfterViewInit, Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { AuthService } from './core/auth/auth.service';
import { authenticateQuery } from './shared/query/authenticateQuery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  userName: string = '';
  password: string = '';
  condition: boolean = false;

  apollo: Apollo;
  user: any;
  loggedIn: boolean;

  constructor(private notifyService: NotifyService, private leagueService: LeagueService,
    private authService: AuthService
    // public auth: AuthService
  ) {
    // auth.handleAuthentication();
  }



  ngAfterViewInit() {
    this.notifyService.sendUserName.subscribe(userName => {
      this.userName = userName;
    });

    this.apollo.query({
      query: authenticateQuery,
      fetchPolicy: 'network-only'
    }).subscribe(({ data }) => {
      this.user = data;
    });
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