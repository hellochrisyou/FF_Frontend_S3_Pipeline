import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService, LeagueService } from '@core';
import { League, LeagueMenu } from '@shared/model/interface.model';
import * as links from '@shared/var/enum';
import * as global from '@shared/var/globals';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  leagues: League[] = [];
  leagueFormCtrl = new FormControl('', [Validators.required]);
  leagueFormGroup: FormGroup;
  name = '';
  dataSource: MatTableDataSource<LeagueMenu>;
  leagueNames: string[] = [];
  leagueMenus: LeagueMenu[] = [];
  draft = 'Draft';
  onGoing = 'Ongoing';

  homeCol: string[] = global.homeCol;

  constructor(
    private formBuilder: FormBuilder,
    private leagueService: LeagueService,
    private api: ApiService
  ) { }
  ngAfterViewInit() {
    const userName = this.leagueService.getUserName();
    this.api.httpGet(links.ApiUrls.findAccount + userName).subscribe(account => {
      this.leagueService.setMyAccount(account);
      this.api.httpGetAll(links.ApiUrls.getAllLeagues).subscribe(leagues => {
        this.leagueService.setAllLeagues(leagues);
        this.leagueMenus = this.leagueService.setLeagueMenu(leagues);
        this.dataSource = new MatTableDataSource(this.leagueMenus);
      });
    });

    this.leagueFormGroup = this.formBuilder.group({
      leagueFormCtrl: ['', , Validators.required, Validators.min(1)]
    });
  }
  CreateTeam(index: string) {
    this.leagueService.setMyLeague(this.leagueMenus[index].name);
  }
  Draft(index: string) {
    this.leagueService.setMyLeague(this.leagueMenus[index].name);
  }
  League(index: string) {
    this.leagueService.setMyLeague(this.leagueMenus[index].name);
  }
}


