import { NgModule } from '@angular/core';

import { CreateLeagueRoutingModule } from './create-league-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CreateLeagueComponent } from './create-league.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [CreateLeagueComponent],
  imports: [SharedModule, CreateLeagueRoutingModule,
    FormsModule,
    ReactiveFormsModule,],
  exports: [CreateLeagueComponent]
})
export class CreateLeagueModule { }
