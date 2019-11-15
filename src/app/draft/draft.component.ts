import { Component, OnInit } from '@angular/core';
import * as columns from '../shared/var/globals';
import { League } from 'src/app/shared/model/interface.model';
import { LeagueService } from 'src/app/core/services/model/league.service';
import { DraftService } from 'src/app/core/services/concrete/draft.service';
import { WaiverService } from 'src/app/core/services/concrete/waiver.service';
import { FilterService } from 'src/app/core/services/logic/filter.service';
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
