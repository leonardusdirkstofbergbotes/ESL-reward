import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyStickerGroupsRoutingModule } from './my-sticker-groups-routing.module';
import { MyStickerGroupsComponent } from './my-sticker-groups.component';


@NgModule({
  declarations: [
    MyStickerGroupsComponent
  ],
  imports: [
    CommonModule,
    MyStickerGroupsRoutingModule,
    SharedModule
  ]
})
export class MyStickerGroupsModule { }
