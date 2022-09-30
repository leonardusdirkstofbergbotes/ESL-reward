import { HelperFunctionsService } from './../../services/helpers/helper-functions.service';
import { S3Service } from './../../services/s3/s3.service';
import { FileManagerService } from './file-manager.service';
import { SnackBarService } from './../snack-bar/snack-bar.service';
import { ModalComponent } from './../modal/modal.component';
import { FormControl, Validators } from '@angular/forms';
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
  breadCrumbData: Folder[] = [];
  existingFolderName: string[] = [];
  newFolderName: FormControl = new FormControl("", [Validators.required]);
  @ViewChild('newFolderModal') newFolderModal!: ModalComponent;
  openFolderData!: Folder;

  constructor(
    private _firebase: FirebaseWrapperService,
    private _snackbar: SnackBarService,
    private _fileManager: FileManagerService,
    private _awsS3: S3Service,
    public helper: HelperFunctionsService
  ) {}

  ngOnInit(): void {
    this.getData("root");
  }

  getData (path: string) {
    this.getFolderData({folderName: "root", folderId: 'root', parentFolderId: 'root'});
  }

  async getFolderData (folderData: Folder) {
    this.loading = true;
    let folderResponse: any[] = await this._firebase.getData('user-uid-1', 'folders', folderData.folderId);

    let newFolderData = [];
    for (let [firebaseUID, folder] of Object.entries(folderResponse)) {
      newFolderData.push({...folder, parentFolderId: firebaseUID});
    }

    this.folders = newFolderData;
    this.openFolderData = folderData;
    this._fileManager.changeFolder(folderData);
    this.setBreadCrumbData();

    
    await this.getFileData('sdfsdf');
    this.loading = false;
  }

  async getFileData (folderId: string) {
    this.files = await this._awsS3.getFilesInsideFolder('user-uid-1', this.openFolderData.folderId);
  }

  openFolder (folderId: string) {
    
  }

  addNewFolder () {
    if (this.doesFolderExistAlready(this.newFolderName.value)) {
      // show error on input
    }
    else {
      this.loading = true;
      this._firebase.createNewFolder('user-uid-1', this.newFolderName.value, this.openFolderData.folderId);
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
    let lastBreadcrumbIndex = this.breadCrumbData.length - 1;
    this.getFolderData(this.breadCrumbData[lastBreadcrumbIndex - 1]);
  }

  setBreadCrumbData () {
    let exists: boolean = false;
    let keyToReset!: number;

    for (let [index, folder] of Object.entries(this.breadCrumbData)) {
      if (folder.folderId === this.openFolderData.folderId) {
        exists = true;
        keyToReset = Number(index);
      }
    }

    if (exists) {
      this.breadCrumbData = this.breadCrumbData.filter((_folder, index) => {
        return index <= keyToReset;
      });

      console.log(this.breadCrumbData);
    }
    else {
      this.breadCrumbData.push(this.openFolderData);
    }
  }

}
