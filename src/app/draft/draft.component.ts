import { Component, OnInit } from '@angular/core';
import { DraftService, LeagueService } from '@core/index';
@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.scss']
})
export class DraftComponent implements OnInit {
  leagueName: string;
  constructor(private draftService: DraftService, private leagueService: LeagueService) { }

  ngOnInit() {
    this.draftService.CallNflApi();
    this.leagueName = this.leagueService.getMyLeague().leagueName;
  }
}
