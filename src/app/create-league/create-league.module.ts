import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateLeagueRoutingModule } from './create-league-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CreateLeagueComponent } from './create-league.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [CreateLeagueComponent],
  imports: [SharedModule, CreateLeagueRoutingModule, MaterialModule, CommonModule,
    FormsModule,
    ReactiveFormsModule,],
  exports: [CreateLeagueComponent]
})
export class CreateLeagueModule { }
