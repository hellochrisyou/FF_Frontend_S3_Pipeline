import { KickerTableComponent } from './component/kicker-table/kicker-table.component';
import { DefenseTableComponent } from './component/defense-table/defense-table.component';
import { WrTableComponent } from './component/wr-table/wr-table.component';
import { QbTableComponent } from './component/qb-table/qb-table.component';
import { SubmitPopupDialog } from './dialog/submit-popup/submit-popup.dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RbTableComponent } from './component/rb-table/rb-table.component';
import { TeTableComponent } from './component/te-table/te-table.component';
import { MaterialModule } from './material.module';
import { MyTeamDialog } from './dialog/my-team/my-team.dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as fromPlayerTable from './component/index';
import * as fromDialog from './dialog/index';

@NgModule({
  declarations: [
    ...fromPlayerTable.playerTable,
    ...fromDialog.dialog,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    ...fromPlayerTable.playerTable,
    ...fromDialog.dialog,
  ],
  entryComponents: [...fromDialog.dialog]
})
export class SharedModule { }
