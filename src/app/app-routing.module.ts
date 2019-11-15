import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/guard/auth-guard';


const routes: Routes = [

  // {
  //   path: 'create-league',
  //   loadChildren: () => import('./create-league/create-league.module').then(mod => mod.CreateLeagueModule)
  // },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'create-team',
    loadChildren: () => import('./create-team/create-team.module').then(m => m.CreateTeamModule)
  },
  {
    path: 'draft',
    loadChildren: () => import('./draft/draft.module').then(m => m.DraftModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },

  {
    path: 'in-season',
    loadChildren: () => import('./in-season/in-season.module').then(m => m.InSeasonModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)
  },
  {
    path: '**',
    redirectTo: 'error/page-not-found',
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
    // RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [
    RouterModule
  ],
})
export class RoutingModule { }
