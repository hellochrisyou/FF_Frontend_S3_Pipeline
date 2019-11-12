// import {AuthService} from './core/auth/auth.service';
import { LeagueService } from './service/model/league.service';
import { NotifyService } from './service/emit/notify.service';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Button } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  userName = 'default';
  condition: boolean = false;

  constructor(private notifyService: NotifyService, private leagueService: LeagueService,
    private elementRef: ElementRef
    // public auth: AuthService
  ) {
    // auth.handleAuthentication();
  }



  ngAfterViewInit() {
    this.notifyService.sendUserName.subscribe(userName => {
      this.userName = userName;
    });
    // if (this.auth.isAuthenticated()) {
    //   this.auth.renewTokens();
    // }
  }

  btnClick() {
    console.log('this.condition', this.condition);
    this.condition = !this.condition;
    console.log('this.condition', this.condition);
  }
}