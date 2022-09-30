import { S3Service } from './../../shared/services/s3/s3.service';
import { Folder } from 'src/app/models/folder';
import { FileManagerService } from './../../shared/components/file-manager/file-manager.service';
import { FileDropPoolComponent } from './../../shared/components/file-drop-pool/file-drop-pool.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-stickers',
  templateUrl: './my-stickers.component.html',
  styleUrls: ['./my-stickers.component.scss']
})
export class MyStickersComponent implements OnInit {

  @ViewChild('stickerDropPool') stickerDropPool!: FileDropPoolComponent;
  openFolder!: Folder;
  files!: File[];
  
  constructor(
    private _awsS3: S3Service,
    private _fileManager: FileManagerService
  ) { 
    this._fileManager.folderChanged.subscribe((folder: Folder) => {
      this.openFolder = folder;
    });
  }

  ngOnInit(): void {
  }

  getFilesFromDropPool () {
    let files = this.stickerDropPool.getFiles();
    
    files.forEach((file: File) => {
      this._awsS3.fileUpload(file, 'user-uid-1', this.openFolder.folderId);
    })
  }

}
