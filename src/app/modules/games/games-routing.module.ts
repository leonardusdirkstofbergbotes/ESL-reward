import { StickerCollectionComponent } from './components/sticker-collection/sticker-collection.component';
import { GamesComponent } from './games.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', component: GamesComponent,
  children: [{
    path: 'sticker-collection', component: StickerCollectionComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
