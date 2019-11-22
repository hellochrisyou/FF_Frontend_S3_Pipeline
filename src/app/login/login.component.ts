import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthenticateService, AuthService, RegisterService } from '@core';
import { Dto } from '@shared/model/interface.model';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  thisDto: Dto;

  condition = true;
  submitted = false;
  loggedIn = false;

  signInFG: FormGroup;
  signUpFG: FormGroup;
  signInNameCtrl = new FormControl('', [Validators.required, Validators.min(3)]);
  signInPasswordCtrl = new FormControl('', [Validators.required, Validators.min(3)]);
  signUpNameCtrl = new FormControl('', [Validators.required, Validators.min(3)]);
  signUpPasswordCtrl = new FormControl('', [Validators.required, Validators.min(3)]);

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private apollo: Apollo,
    private authenticateService: AuthenticateService,
    private registerService: RegisterService
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
    this.condition = !this.condition;
  }

  login(accountName: string, password: string) {
    // const thisDto: Dto = {
    //   myAccountName: accountName,
    //   password
    // };
    // const variables = thisDto;
    // this.authenticateService.mutate(
    //   {
    //     mutation: AuthenticateService,
    //     variables
    //   })
    //   .subscribe((result) => {
    //     console.log('reuslt', result);
    //     this.authService.setAccountName(this.thisDto.myAccountName);
    //     this.authService.saveUserData(this.thisDto.myAccountName, result.data.token);
    //     this.router.navigate(['/home']);
    //   }, ((err) => {
    //     console.log('login error', err);
    //     this.onReset();
    //   })
    //   );
  }

  register(accountName: string, password: string) {
    this.thisDto = {
      myLeagueName: '',
      myAccountName: password,
      password: accountName,
      myTeamName: '',
      myTeamHelmet: '',
      otherTeamName: '',
      token: '',
      player1: {
        playerName: '',
        position: '',
        active: false
      },
      player2: {
        playerName: '',
        position: '',
        active: false
      }
    };
    this.registerService.mutate(
      {
        mutation: RegisterService,
        variables: {
          dto: this.thisDto
        }
      }).subscribe((result) => {
        // this.authService.setAccountName(this.thisDto.myAccountName);
        // this.authService.saveUserData(this.thisDto.myAccountName, result.data);
        // this.router.navigate(['/home']);
      }, ((err) => {
        console.log('login error', err);
        this.onReset();
      }));
  }

  onReset() {
    this.submitted = false;
    this.signInFG.reset();
    this.signUpFG.reset();
  }
}
