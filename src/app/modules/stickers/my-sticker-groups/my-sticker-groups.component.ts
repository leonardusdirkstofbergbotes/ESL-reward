import { Component } from '@angular/core';

@Component({
  selector: 'app-my-sticker-groups',
  templateUrl: './my-sticker-groups.component.html',
  styleUrls: ['./my-sticker-groups.component.scss']
})
export class MyStickerGroupsComponent {

  formTabs: string[] = ["Select stickers", 'Group Details'];
  currentTab: number = 1;
}
