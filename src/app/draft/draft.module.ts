import { NgModule } from '@angular/core';
import { DraftRoutingModule } from './draft-routing.module';
import { SharedModule } from '@shared/shared.module';
import * as fromDraft from '@draft';

@NgModule({
  declarations: [...fromDraft.draft],
  imports: [SharedModule, DraftRoutingModule],
  exports: [...fromDraft.draft]
})
export class DraftModule { }
