import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyStickersRoutingModule } from './my-stickers-routing.module';
import { MyStickersComponent } from './my-stickers.component';


@NgModule({
  declarations: [
    MyStickersComponent
  ],
  imports: [
    CommonModule,
    MyStickersRoutingModule,
    SharedModule
  ]
})
export class MyStickersModule { }
