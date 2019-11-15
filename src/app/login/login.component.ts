import { Component, OnInit } from '@angular/core';
// import { GC_USER_ID, GC_AUTH_TOKEN } from '../shared/var/globals';
import { AuthService } from '../core/services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LeagueService } from '../core/services/model/league.service';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { ACCOUNT_NAME, TOKEN } from '../shared/var/globals';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
}
