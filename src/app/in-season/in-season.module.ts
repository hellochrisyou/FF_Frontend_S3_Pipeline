import { NgModule } from '@angular/core';
import { InSeasonRoutingModule } from './in-season-routing.module';
import { SharedModule } from '@shared/shared.module';

import * as fromInSeason from './index';

@NgModule({
  declarations: [...fromInSeason.inSeason],
  imports: [SharedModule, InSeasonRoutingModule],
  exports: [...fromInSeason.inSeason]
})
export class InSeasonModule { }
