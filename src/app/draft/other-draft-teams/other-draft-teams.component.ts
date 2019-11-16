import { Component, OnInit } from '@angular/core';
import { Team } from '@shared/model/interface.model';
import { LeagueService } from '@core';

@Component({
  selector: 'app-other-draft-teams',
  templateUrl: './other-draft-teams.component.html',
  styleUrls: ['./other-draft-teams.component.scss']
})
export class OtherDraftTeamsComponent implements OnInit {
  otherTeams: Team[] = [];

  constructor(private leagueService: LeagueService) { }

  ngOnInit() {
    this.otherTeams = this.leagueService.getOtherTeams();
    console.log('otherteams', this.otherTeams);
  }
}
