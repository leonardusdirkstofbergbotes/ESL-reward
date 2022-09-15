import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-sticker-groups',
  templateUrl: './my-sticker-groups.component.html',
  styleUrls: ['./my-sticker-groups.component.scss']
})
export class MyStickerGroupsComponent implements OnInit {

  formTabs: string[] = ["Select stickers", 'Group Details'];

  constructor() { }

  ngOnInit(): void {
  }

}
