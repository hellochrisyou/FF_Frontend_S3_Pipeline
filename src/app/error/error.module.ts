import { NgModule } from '@angular/core';

import { ErrorRoutingModule } from './error-routing.module';
import { ErrorComponent } from './error.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    SharedModule,
    ErrorRoutingModule
  ],
  exports: [
    ErrorComponent
  ]
})
export class ErrorModule { }
