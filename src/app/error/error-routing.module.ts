import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error.component';


const routes: Routes = [
  {
    path: '',
    // redirectTo: 'application',
    children: [
      {
        path: 'application',
        component: ErrorComponent,
      },
      {
        path: 'authorization-error',
        component: ErrorComponent,
      },
      {
        path: 'authorization-invalid',
        component: ErrorComponent,
      },
      {
        path: 'page-not-found',
        component: ErrorComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
