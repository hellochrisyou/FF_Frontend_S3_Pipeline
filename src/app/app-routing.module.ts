import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent
  },
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
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '',
  }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes, { enableTracing: true });
