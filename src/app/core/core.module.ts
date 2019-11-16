import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import * as fromServices from './index';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  exports: [
    ...fromServices.services
  ]
})
export class CoreModule { }
