import { Component, OnInit, ViewChild } from '@angular/core';
import { SubmitPopupDialog } from '@shared/dialog';
import { ApiService, LeagueService, CloseDialogService, AddPlayerService, ToggleTradeService } from '@core';
import * as _globals from '@shared/var/globals';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Player } from '@shared/model/interface.model';
import { MatSort } from '@angular/material/sort';
import { MyTeamDialog } from '@shared/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.scss']
})
export class MyTeamComponent implements OnInit {
  activePlayers: Player[];
  inActivePlayers: Player[];
  activeDataSource: MatTableDataSource<Player>;
  inActiveDataSource: MatTableDataSource<Player>;
  playerCol: string[] = _globals.playerCol;
  myPlayer: Player = {
    playerName: 'default',
    position: 'Defense',
    active: false
  };
  @ViewChild(MatSort, { static: true }) activeSort: MatSort;
  @ViewChild(MatSort, { static: true }) inactiveSort: MatSort;

  constructor(
    public dialog: MatDialog,
    public router: Router,
    private toggleTradeService: ToggleTradeService,
    private addPlayerService: AddPlayerService,
    private api: ApiService,
    private closeDialogService: CloseDialogService,
    private leagueService: LeagueService
  ) {
    this.toggleTradeService.setIsTrade(false);
  }

  ngOnInit() {
    // this.toggleTradeService.statusPopUp.subscribe(dto => {
    //   this.api.httpPut(globals.ApiUrls.togglePlayer, dto).subscribe(returnData => {
    //     this.successPopup();
    //   });
    // });
    this.addPlayerService.setIsWaiver(false);
    this.activePlayers = this.leagueService.getActivePlayers();
    this.inActivePlayers = this.leagueService.getInActivePlayers();

    this.activeDataSource = new MatTableDataSource(this.activePlayers);
    this.activeDataSource.sort = this.activeSort;

    this.inActiveDataSource = new MatTableDataSource(this.inActivePlayers);
    this.inActiveDataSource.sort = this.inactiveSort;
  }

  toggleActive(index) {
    this.toggleTradeService.setIsActive(true);
    this.myPlayer = this.activePlayers[index];
    this.toggledPopup(index);
  }

  toggleInActive(index) {
    this.toggleTradeService.setIsActive(false);
    this.myPlayer = this.inActivePlayers[index];
    this.toggledPopup(index);
  }

  toggledPopup(index: number): void {
    this.toggleTradeService.setIsTrade(false);
    const dialogRef = this.dialog.open(MyTeamDialog, {
      width: '25vw',
      data: {
        player: this.myPlayer
      }
    });
    dialogRef.afterClosed().subscribe(x => {
      this.router.navigate(['home']);
    });
    this.closeDialogService.emitClose.subscribe(status => {
      dialogRef.close();
    });
  }

  successPopup(): void {
    const name = this.addPlayerService.getDraftName();
    const dialogRef = this.dialog.open(SubmitPopupDialog, {
      width: '25vw',
      data: {
        title: 'Swap Players',
        subTitle: 'Success',
        text: 'You have changed your lineup.'
      }
    });
    dialogRef.afterClosed().subscribe(x => {
      this.closeDialogService.closeDialog('Closed');
      this.router.navigate(['home']);
    });
  }
}
