import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthenticateService, AuthService, RegisterService } from '@core/index';
import { Dto } from '@shared/model/interface.model';

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
    private router: Router,
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
    let thisDto: Dto = {
      myAccountName: accountName,
      password: password
    };
    const variables = thisDto;
    this.authenticateService.mutate(
      {
        mutation: AuthenticateService,
        variables
      })
      .subscribe((result) => {
        console.log('reuslt', result);
        this.authService.setAccountName(this.thisDto.myAccountName);
        this.authService.saveUserData(this.thisDto.myAccountName, result.data.token);
        this.router.navigate(['/home']);
      }, ((err) => {
        console.log('login error', err);
        this.onReset();
      })
      );
  }

  register(accountName: string, password: string) {
    let thisDto: Dto = {
      myAccountName: accountName,
      password: password
    };
    const variables = thisDto;
    this.registerService.mutate(
      {
        mutation: RegisterService,
        variables
      })
      .subscribe((result) => {
        this.authService.setAccountName(this.thisDto.myAccountName);
        this.authService.saveUserData(this.thisDto.myAccountName, result.data.token);
        this.router.navigate(['/home']);
      }, ((err) => {
        console.log('login error', err);
        this.onReset();
      })
      );
  }

  onReset() {
    this.submitted = false;
    this.signInFG.reset();
    this.signUpFG.reset();
  }
}
