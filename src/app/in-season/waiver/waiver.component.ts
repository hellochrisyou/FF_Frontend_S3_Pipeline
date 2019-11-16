import { Component, OnInit } from '@angular/core';
import { SubmitPopupDialog } from '@shared/dialog';
import { Router } from '@angular/router';
import { ApiService, AddPlayerService, WaiverService } from '@core';
import * as globals from '@shared/var/enum';
import { CloseDialogService } from '@core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-waiver',
  templateUrl: './waiver.component.html',
  styleUrls: ['./waiver.component.scss']
})
export class WaiverComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private closeDialogService: CloseDialogService,
    public router: Router,
    private addPlayerService: AddPlayerService,
    private api: ApiService,
    private waiverService: WaiverService
  ) {
    this.addPlayerService.setIsWaiver(true);
  }
  ngOnInit() {
    this.waiverService.CallNflApi();
    this.addPlayerService.waiverPopUp.subscribe(dto => {
      this.api.httpPut(globals.ApiUrls.addWaiver, dto).subscribe(returnData => {
        console.log('returndata', returnData);
        this.draftedPopup();
      });
    });
  }

  draftedPopup(): void {
    const name = this.addPlayerService.getDraftName();
    const dialogRef = this.dialog.open(SubmitPopupDialog, {
      width: '25vw',
      data: {
        title: 'League Draft',
        subTitle: 'Success',
        text: 'You have drafted ' + name + ' successfully.'
      }
    });
    dialogRef.afterClosed().subscribe(x => {
      this.closeDialogService.closeDialog('Closed');
      this.router.navigate(['home']);
    });
  }
}
