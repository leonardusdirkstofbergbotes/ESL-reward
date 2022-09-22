import { MOCK_FOLDER_DATA } from './mock-file-data';
import { Component, OnInit } from '@angular/core';
import { Folder } from 'src/app/models/folder';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {

  openFolderData: Folder[];
  breadCrumbData: string[] = [];

  constructor() {
    this.openFolderData = MOCK_FOLDER_DATA;
  }

  ngOnInit(): void {
  }

  openFolder (index: number) {
    console.log(this.openFolderData);
    if (this.openFolderData[index].subFolders.length > 0) {

      this.breadCrumbData.push(this.openFolderData[index].folderName);
      this.openFolderData = this.openFolderData[index].subFolders;
    //   // API fetch to get the next level of folder data should happen here

    //   console.log(this.openFolderData);
    }
  }

}
