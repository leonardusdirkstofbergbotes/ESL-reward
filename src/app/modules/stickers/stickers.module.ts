
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StickersRoutingModule } from './stickers-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StickersRoutingModule,
    SharedModule
  ]
})
export class StickersModule { }
