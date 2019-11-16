import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LeagueService } from '@core';
import { Player } from '@shared/model/interface.model';
import * as global from '@shared/var/globals';

@Component({
  selector: 'app-my-draft-team',
  templateUrl: './my-draft-team.component.html',
  styleUrls: ['./my-draft-team.component.scss']
})
export class MyDraftTeamComponent implements OnInit {
  playerCol: string[] = global.playerCol;
  myPlayers: Player[] = [];
  dataSource = new MatTableDataSource(this.myPlayers);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public leagueService: LeagueService) { }


  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.myPlayers = this.leagueService.getMyPlayers();
  }
}
