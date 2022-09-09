import { MOCK_FOLDER_DATA } from './mock-folder-data';
import { Folder } from './../../../../models/folder';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticker-navigator',
  templateUrl: './sticker-navigator.component.html',
  styleUrls: ['./sticker-navigator.component.scss']
})
export class StickerNavigatorComponent implements OnInit {

  folders: Folder[] = MOCK_FOLDER_DATA;
  folderOpen: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  openFolder (folder: Folder) {
    console.log(folder);
  }

}
