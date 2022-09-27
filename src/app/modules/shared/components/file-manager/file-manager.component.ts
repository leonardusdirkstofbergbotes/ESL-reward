import { SnackBarService } from './../snack-bar/snack-bar.service';
import { ModalComponent } from './../modal/modal.component';
import { FormControl, Validators } from '@angular/forms';
import { push } from 'firebase/database';
import { FirebaseWrapperService } from './../../services/firebase/firebase-wrapper.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Folder } from 'src/app/models/folder';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {

  folders: Folder[] = [];
  files: File[] = [];
  loading: boolean = false;
  breadCrumbData: string[] = ['root'];
  existingFolderName: string[] = [];
  dummyBreadCrumbData: string[] = ['root', 'test', 'folder 1'];
  newFolderName: FormControl = new FormControl("", [Validators.required]);
  @ViewChild('newFolderModal') newFolderModal!: ModalComponent;
  openFolderId: string = 'root';
  previousFolderId!: string;

  constructor(
    private _firebase: FirebaseWrapperService,
    private _snackbar: SnackBarService
  ) {}

  ngOnInit(): void {
    this.getData("root");
  }

  async getData (path: string) {
    this.loading = true;
    this.getFolderData(path);
    this.getFileData(path).then(() => {
      this.loading = false;
    });
  }

  async getFolderData (folderId: string) {
    let folderResponse: any[] = await this._firebase.getData('user-uid-1', 'folders', folderId);

    let folderData = [];
    for (let [firebaseUID, folder] of Object.entries(folderResponse)) {
      folderData.push({...folder, parentFolderId: firebaseUID});
    }

    this.folders = folderData;
    this.previousFolderId = this.openFolderId;
    this.openFolderId = folderId;
  }

  async getFileData (folderId: string) {
    let files: any[] = await this._firebase.getData('user-uid-1', 'files', folderId) ?? [];
  }

  openFolder (folderId: string) {
    
  }

  addNewFolder () {
    if (this.doesFolderExistAlready(this.newFolderName.value)) {
      // show error on input
    }
    else {
      this.loading = true;
      this._firebase.createNewFolder('user-uid-1', this.newFolderName.value, this.openFolderId);
      this.newFolderModal.closeModal();
      this.loading = false;
      this.newFolderName.reset();
      this._snackbar.notify('success', 'Folder successfully created');
    }
  }

  doesFolderExistAlready (newFolderName: string): boolean {
    let exists: boolean = false;

    Array.from(this.existingFolderName).forEach(folder => {
      if (folder === newFolderName) exists = true;
    });

    return exists;
  }

  back () {
    // this should loop out of the array
    this.getFolderData(this.previousFolderId);
  }

}
