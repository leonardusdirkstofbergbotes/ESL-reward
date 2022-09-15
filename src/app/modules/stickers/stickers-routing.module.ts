import { StickersComponent } from './stickers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: StickersComponent,
  children: [{
    path: 'my-stickers', loadChildren: () => import('./my-stickers/my-stickers.module').then(m => m.MyStickersModule)
  }, {
    path: 'my-sticker-groups', loadChildren: () => import('./my-sticker-groups/my-sticker-groups.module').then(m => m.MyStickerGroupsModule)
  }, {
    path: 'community-sticker-groups', loadChildren: () => import('./community-sticker-groups/community-sticker-groups.module').then(m => m.CommunityStickerGroupsModule)
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StickersRoutingModule { }
