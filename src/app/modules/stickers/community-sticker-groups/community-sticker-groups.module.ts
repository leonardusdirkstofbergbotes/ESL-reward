import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityStickerGroupsRoutingModule } from './community-sticker-groups-routing.module';
import { CommunityStickerGroupsComponent } from './community-sticker-groups.component';


@NgModule({
  declarations: [
    CommunityStickerGroupsComponent
  ],
  imports: [
    CommonModule,
    CommunityStickerGroupsRoutingModule,
    SharedModule
  ]
})
export class CommunityStickerGroupsModule { }
