import { Component, ViewChild, OnInit } from '@angular/core';
import * as global from '../../var/globals';
import { TE, Player } from '../../model/interface.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AddPlayerService, LeagueService, CloseDialogService, NotifyService } from '@core/index';
import { MatDialog } from '@angular/material/dialog';
import { MyTeamDialog } from '../../dialog/my-team/my-team.dialog';

@Component({
  selector: 'app-te-table',
  templateUrl: './te-table.component.html',
  styleUrls: ['./te-table.component.scss']
})
export class TeTableComponent implements OnInit {
  teCol: string[] = global.teCol;
  teArray: TE[];
  myPlayer: Player = {
    playerName: 'default',
    position: 'TE',
    active: false
  };
  isWaiver: boolean;
  dataSource: MatTableDataSource<TE>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private closeDialogService: CloseDialogService,
    private addPlayerService: AddPlayerService,
    private leagueService: LeagueService,
    private notifyService: NotifyService
  ) { }

  ngOnInit() {
    this.notifyService.teDraftComplete.subscribe(teArray => {
      this.teArray = teArray;
      this.dataSource = new MatTableDataSource(this.teArray);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    this.notifyService.teWaiverComplete.subscribe(teArray => {
      this.teArray = teArray;
      this.dataSource = new MatTableDataSource(this.teArray);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  addTE(index: number): void {
    const name = this.teArray[index].name;
    this.teArray.splice(index, 1); //Do I need this?
    this.myPlayer.playerName = name;
    this.myPlayer.position = 'TE';
    this.myPlayer.fantasy_points = this.teArray[index].fantasy_points;
    if (this.isWaiver) {
      this.myTeamPopup(index);
    } else {
      this.addPlayerService.addDraftPlayer(this.leagueService.updateDto(this.myPlayer), name);
    }
  }
  myTeamPopup(index): void {
    const dialogRef = this.dialog.open(MyTeamDialog, {
      width: '25vw',
      data: {
        player: this.myPlayer
      }
    });
    dialogRef.afterClosed().subscribe(x => {
      // Add Waiver player
    });
    this.closeDialogService.emitClose.subscribe(status => {
      dialogRef.close();
    });
  }
}
