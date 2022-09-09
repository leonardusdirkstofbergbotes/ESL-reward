import { CommunityStickerGroupsComponent } from './community-sticker-groups.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', component: CommunityStickerGroupsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityStickerGroupsRoutingModule { }
