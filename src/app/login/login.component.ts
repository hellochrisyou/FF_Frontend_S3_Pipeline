import { Component, OnInit } from '@angular/core';
// import { GC_USER_ID, GC_AUTH_TOKEN } from '../shared/var/globals';
import { AuthService } from '../core/services/auth.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LeagueService } from '../core/services/model/league.service';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { ACCOUNT_NAME, TOKEN } from '../shared/var/globals';
import { Dto } from '../shared/model/interface.model';
import { Apollo } from 'apollo-angular';
import { register } from '../shared/mutation/accountMutations';
import { authenticateQuery } from '../shared/query/accountQuery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  thisDto: Dto = {
    myAccountName: '',
    password: ''
  }

  condition: boolean = true;
  submitted = false;
  loggedIn: boolean = false;

  signInFG: FormGroup;
  signUpFG: FormGroup;
  signInNameCtrl = new FormControl('', [Validators.required, Validators.min(3)]);
  signInPasswordCtrl = new FormControl('', [Validators.required, Validators.min(3)]);
  signUpNameCtrl = new FormControl('', [Validators.required, Validators.min(3)]);
  signUpPasswordCtrl = new FormControl('', [Validators.required, Validators.min(3)]);

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private apollo: Apollo,
    private router: Router
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
      this.thisDto.myAccountName = accountName;
      this.thisDto.password = password;
      this.apollo.query(
        {
          query: authenticateQuery,
          variables: {
            dto: this.thisDto
          }
        })
        .subscribe((result) => {
          this.authService.setAccountName(this.thisDto.myAccountName);
          this.authService.saveUserData(this.thisDto.myAccountName, result.data as string);
          this.router.navigate(['/home']);
        }, ((err) => {
          console.log('login error', err);
          this.onReset();
        })
        );
    }
  }

  register(accountName: string, password: string) {
    this.submitted = true;
    if (this.signUpFG.invalid) {
      return;
    } else {
      this.thisDto.myAccountName = accountName;
      this.thisDto.password = password;
      this.apollo.mutate(
        {
          mutation: register,
          variables: {
            dto: this.thisDto
          }
        })
        .subscribe((result) => {
          this.authService.setAccountName(this.thisDto.myAccountName);
          this.authService.saveUserData(this.thisDto.myAccountName, result.data as string);
          this.authService.saveUserData
          this.router.navigate(['/home']);
        }, ((err) => {
          console.log('login error', err);
          this.onReset();
        })
        );
    }
  }

  onReset() {
    this.submitted = false;
    this.signInFG.reset();
    this.signUpFG.reset();
  }
}
