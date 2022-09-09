import { MyStickerGroupsComponent } from './my-sticker-groups.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', component: MyStickerGroupsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyStickerGroupsRoutingModule { }
