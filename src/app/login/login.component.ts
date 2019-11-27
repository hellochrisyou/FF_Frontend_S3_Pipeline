import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthenticateService, AuthService, RegisterAccountService } from '@core';
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
    private authenticateService: AuthenticateService,
    private registerAccountService: RegisterAccountService
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

  loginAuthenticate(accountName: string, password: string) {
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

  loginRegister(argName: string, argPass: string) {
    this.registerAccountService.registerAcct('test').subscribe((data) => {
        console.log(data);
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
