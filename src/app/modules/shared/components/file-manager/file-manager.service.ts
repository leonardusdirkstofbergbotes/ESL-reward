import { Folder } from 'src/app/models/folder';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileManagerService {

  folderChanged = new Subject<Folder>();

  constructor() { }

  changeFolder (folder: Folder) {
    this.folderChanged.next(folder);
  }
}
