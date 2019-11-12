import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateLeagueComponent } from './create-league/create-league.component';
import { ModuleWithProviders } from "@angular/core";


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'create-league',
    loadChildren: () => import('./create-league/create-league.module').then(mod => mod.CreateLeagueModule)
  },
  {
    path: 'create-team',
    loadChildren: () => import('./create-team/create-team.module').then(mod => mod.CreateTeamModule)
  },
  {
    path: 'draft',
    loadChildren: () => import('./draft/draft.module').then(mod => mod.DraftModule)
  },
  {
    path: 'in-season',
    loadChildren: () => import('./in-season/in-season.module').then(mod => mod.InSeasonModule)
  },
  {
    path: '**',
    component: HomeComponent
  }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
