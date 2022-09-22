import { FileNameChange } from './models/file-name-changes';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as imageConversion from 'image-conversion';
import { FileError } from './models/file-error';

@Component({
  selector: 'app-file-drop-pool',
  templateUrl: './file-drop-pool.component.html',
  styleUrls: ['./file-drop-pool.component.scss']
})
export class FileDropPoolComponent {

  @ViewChild('fileUpload') originalFileUploadElement!: ElementRef;
  @Input() acceptedFormats: string[] = ["image/png", "image/jpeg", "image/webp", "image/jfif", "image/jpg", "image/gif"]; 
  @Input() maxFileSize: number = 5242880 // 5MB
  @Input() allowMultiple: boolean = true;
  @Input() maxFiles: number = 10;
  @Input() existingFileNames: string[] = ['hover example.gif'];
  filesReadyForUpload: File[] = [];
  filesWithErrors: FileError[] = [];
  generalErrorMessage: string | null = null;
  fileNameChanges: FileNameChange[] = [];

  constructor(public domSanitizer: DomSanitizer) {}

  dropHandler (event: any) {    
    event.preventDefault();
    event.stopPropagation();
    this.processFiles(event.dataTransfer.files);
  }

  fileChanged (event: any) {
    this.processFiles(event.target.files);
  }

  processFiles (files: File[]) {
    if (this.numberOfFilesValid(files)) {
      Array.from(files).forEach(file => {
        if (this.typeOfFileValid(file.type)) {
          if (this.sizeOfFileValid(file.size)) {
            if (!this.isFileAlreadyInArray(file, 'uploadFiles')) {
              this.addProcessedFile(file);
            }              
          } else {
            this.addFileToErrorArray(file, `File too big (Max allowed size: ${this.humanFileSize(this.maxFileSize)})`);
          }
        } else {
          this.addFileToErrorArray(file, "File format is not valid");
        }
      });

      this.clearOriginalFileInput();
    }
  }

  clearOriginalFileInput () {
    this.originalFileUploadElement.nativeElement.value = '';
  }

  numberOfFilesValid (files: File[]): boolean {
    if ((!this.allowMultiple && this.filesReadyForUpload.length == 1) || (!this.allowMultiple && files.length > 1)) {
      this.generalErrorMessage = "You can only upload 1 file at a time";
      return false;
    }

    if ((this.filesReadyForUpload.length + files.length) > this.maxFiles || (this.allowMultiple && files.length > this.maxFiles)) {
      this.generalErrorMessage = `You can only upload ${this.maxFiles} files at a time`;
      return false
    }

    this.generalErrorMessage = null;
    return true;
  }

  typeOfFileValid (type: string): boolean {
    return this.acceptedFormats.includes(type);
  }

  sizeOfFileValid (size: number): boolean {
    return size <= this.maxFileSize;
  }

  isFileAlreadyInArray (fileToBeAdded: File, arrayToFilter: string): boolean {
    console.log(fileToBeAdded);
    let fileAlreadyInArray: boolean = false;

    if (arrayToFilter === 'uploadFiles') {
      // NOTE: This is checking based on original name and possible new name;
      Array.from(this.filesReadyForUpload).forEach(file => {
        if (file.name == fileToBeAdded.name) {
          fileAlreadyInArray = true;
        }
      });

      if (!fileAlreadyInArray && this.existingFileNames.length > 0) {
        Array.from(this.existingFileNames).forEach((fileName: string) => {
          if (fileName == fileToBeAdded.name) {
            fileAlreadyInArray = true;
            this.addFileToErrorArray(fileToBeAdded, `A file with the name "${fileToBeAdded.name}" already exists`);
          }
        });
      }

      return fileAlreadyInArray;
    }
    else {
      Array.from(this.filesWithErrors).forEach(fileDetails => {
        if (fileDetails.file.name == fileToBeAdded.name) {
          fileAlreadyInArray = true;
        }
      });
  
      return fileAlreadyInArray;
    }
  }

  addProcessedFile (fileToBeAdded: File) {
    this.filesReadyForUpload.push(fileToBeAdded);
    this.fileNameChanges.push({
      originalName: fileToBeAdded.name,
      newName: fileToBeAdded.name.replace(/\.[^/.]+$/, ""), // remove extension from filename
      error: null
    });
    // imageConversion.compress(fileToBeAdded,0.7).then(blob=>{
    //   let compressedFile = new File([blob], fileToBeAdded.name);
    //   this.filesReadyForUpload.push(compressedFile);
    // })
  }

  updateName (index: number, event: any) {
    let newName = event.target.value.trim();

    if (this.doesNameAlreadyExist(newName)) {
      this.fileNameChanges[index].error = `"${newName}" already exists in this list`;
      this.fileNameChanges[index].newName = this.fileNameChanges[index].originalName;
    }
    else this.fileNameChanges[index].newName = newName;
  }

  doesNameAlreadyExist (newName: string) {
    let nameExists: boolean = false;

    Array.from(this.fileNameChanges).forEach((nameDetails: FileNameChange) => {
      if (newName == nameDetails.newName) nameExists = true;
    });

    return nameExists;
  }

  addFileToErrorArray (file: File, errorMessage: string) {
    if (!this.isFileAlreadyInArray(file, 'errors')) {
      this.filesWithErrors.push({
        error: errorMessage,
        file: file
      });
    }
  }

  generatePreviewUrl (file: File) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(file));
  }

  removeFile (index: number) {
    this.filesReadyForUpload = Array.from(this.filesReadyForUpload).filter((file, fileIndex) => {
      return fileIndex != index;
    });

    this.fileNameChanges = Array.from(this.fileNameChanges).filter((file, fileIndex) => {
      return fileIndex != index;
    })
  }

  resetForm () {
    this.filesReadyForUpload = [];
    this.filesWithErrors = [];
    this.fileNameChanges = [];
    this.generalErrorMessage = '';
    this.clearOriginalFileInput();
  }

  humanFileSize (byteSize?: any) {
    if (byteSize > 1000000) return (byteSize / 1048576).toFixed(1) + ' Mb';
    else return (byteSize / 1024).toFixed(1) + ' Kb';
  }

}
