import { ApiService } from '@core/index';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { League } from '@shared/model/interface.model';
import { Account, Team } from '../shared/model/interface.model';
import { LeagueService } from '@core/index';
import { MatDialog } from '@angular/material/dialog';
import { SubmitPopupDialog } from '@shared/dialog';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';


@Component({
  selector: 'app-create-league',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.scss']
})
export class CreateLeagueComponent implements OnInit {
  league = '';
  helmet = 'red';
  draftPlayers: any[];
  leagueNames: String[];
  myGroup: FormGroup;

  myLeague: League = {
    leagueName: '',
    teams: []
  };
  myAccount: Account = {
    accountName: '',
    password: '',
    roles: [],
    leagues: [],
    teams: []
  };
  draftTeam: Team = {
    teamName: '',
    players: []
  };

  constructor(
    public dialog: MatDialog,
    private leagueService: LeagueService,
    private formBuilder: FormBuilder,
    private api: ApiService,
    public router: Router,
    private apollo: Apollo,
  ) { }

  ngOnInit() {
    // this.allLeaguesGQL.fetch().subscribe(result => {
    //   console.log(result.data);
    //   this.leagueNames = result.data.leagueNames;
    // })

    this.myGroup = this.formBuilder.group({
      nameFormCtrl: new FormControl('', Validators.required),
      helmetFormCtrl: new FormControl('', Validators.required)
    });
    // this.leagueNames = this.leagueService.getAllLeagueNames();


  }



  createLeague(leagueName, helmet): void {
    // console.log('leagueNmae', leagueName);
    // console.log('helmet', helmet);
    // if (this.leagueService.findLeagueNameExist(leagueName)) {
    //   this.duplicatePopup(leagueName);
    // } else {
    //   this.myLeague.name = leagueName;
    //   console.log('myleague', this.myLeague);
    //   this.api.httpPost(globals.ApiUrls.createLeague, this.myLeague).subscribe(account => {
    //     console.log('returned league', account);
    //     this.leagueService.updateMyAccount(account);
    //     this.createdPopup();
    //   });
    // }
  }
  createdPopup(): void {
    const dialogRef = this.dialog.open(SubmitPopupDialog, {
      width: '25vw',
      data: {
        title: 'League Created',
        subTitle: 'Success',
        text: 'Your League has been successfully created.'
      }
    });
    dialogRef.afterClosed().subscribe(x => {
      this.router.navigate(['home']);
    });
  }

  duplicatePopup(leagueName): void {
    const dialogRef = this.dialog.open(SubmitPopupDialog, {
      width: '25vw',
      data: {
        title: 'Create League Error',
        subTitle: 'The name: ' + leagueName + ' already exists',
        text: 'Please enter a different League name.'
      }
    });
  }
}
