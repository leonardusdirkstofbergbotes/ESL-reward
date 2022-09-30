import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
},{
  path: 'stickers', loadChildren: () => import('./modules/stickers/stickers.module').then(m => m.StickersModule),
}, {
  path: 'games', loadChildren: () => import('./modules/games/games.module').then(m => m.GamesModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
