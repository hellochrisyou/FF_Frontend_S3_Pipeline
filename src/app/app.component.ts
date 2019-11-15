// import {AuthService} from './core/auth/auth.service';
import { LeagueService } from './core/services/model/league.service';
import { AuthService } from './core/services/auth.service';
import { ACCOUNT_NAME, TOKEN } from './shared/var/globals';
import { FormControl, Validators, FormBuilder, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  userName: string = '';
  password: string = '';
  condition: boolean = true;

  submitted = false;

  signInFG: FormGroup;
  signUpFG: FormGroup;

  signInNameCtrl = new FormControl('', [Validators.required, Validators.min(3)]);
  signInPasswordCtrl = new FormControl('', [Validators.required, Validators.min(3)]);
  signUpNameCtrl = new FormControl('', [Validators.required, Validators.min(3)]);
  signUpPasswordCtrl = new FormControl('', [Validators.required, Validators.min(3)]);


  loggedIn: boolean = false;
  constructor(private leagueService: LeagueService, private fb: FormBuilder,
    private authService: AuthService
  ) {
    // auth.handleAuthentication();
  }

  matcher = new ShowOnDirtyErrorStateMatcher();


  ngOnInit() {

    this.signInFG = this.fb.group({
      signInNameCtrl: ['', [Validators.required, Validators.min(3)]],
      signInPasswordCtrl: ['', [Validators.required, Validators.min(3)]]
    });

    this.signUpFG = this.fb.group({
      signUpNameCtrl: ['', [Validators.required, Validators.min(3)]],
      signUpPasswordCtrl: ['', [Validators.required, Validators.min(3)]]
    });
  }


  btnClick(): void {
    console.log('this.condition', this.condition);
    console.log('SignUp');
    this.condition = !this.condition;
    console.log('this.condition', this.condition);
  }

  login(accountName: string, password: string) {
    this.submitted = true;
    if (this.signInFG.invalid) {
      return;
    } else {

    }
  }

  register(accountName: string, password: string) {
    this.submitted = true;
    if (this.signUpFG.invalid) {
      return;
    } else {

    }
  }

  // Post Authentication
  saveUserData(accountName, token) {
    localStorage.setItem(ACCOUNT_NAME, accountName);
    localStorage.setItem(TOKEN, token);
    // this.authService.setUserId(id);
    this.onReset();
  }

  onReset() {
    this.submitted = false;
    this.signInFG.reset();
    this.signUpFG.reset();
  }

  // logout() {
  //   this.loggedIn = false;
  //   this.authService.logout();
  // }
}