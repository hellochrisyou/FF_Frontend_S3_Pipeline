import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { LeagueService } from '@core/index';
import { Player } from '@shared/model/interface.model';

@Component({
  selector: 'app-my-draft-team',
  templateUrl: './my-draft-team.component.html',
  styleUrls: ['./my-draft-team.component.scss']
})
export class MyDraftTeamComponent implements OnInit {
  playerCol: string[] = ['name', 'position', 'points'];
  myPlayers: Player[] = [];
  dataSource = new MatTableDataSource(this.myPlayers);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public leagueService: LeagueService) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.myPlayers = this.leagueService.getMyPlayers();
    console.log('myplayers', this.myPlayers);
  }
}
