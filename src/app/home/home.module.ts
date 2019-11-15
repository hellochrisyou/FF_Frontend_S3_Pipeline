import { DraftService } from 'src/app/core/services/concrete/draft.service';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddPlayerService } from '../core/services/emit/add-player.service';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [SharedModule, CommonModule, HomeRoutingModule],
  declarations: [HomeComponent],
  exports: [],
  providers: []
})
export class HomeModule { }
