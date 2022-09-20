import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-file-drop-pool',
  templateUrl: './file-drop-pool.component.html',
  styleUrls: ['./file-drop-pool.component.scss']
})
export class FileDropPoolComponent {

  file?: File;
  @Input() acceptedFormats: string[] = ["image/png", "image/jpeg", "image/webp", "image/jfif", "image/jpg"]; 
  @Input() maxFileSize: number = 5242880 // 5MB
  @Input() allowMultiple: boolean = true;
  @Input() maxFiles: number = 10;
  filesReadyForUpload: File[] = [];
  filesWithErrors: any[] = [];

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
              // TODO: also check if file.name doesn't already exists in the database
              this.addProcessedFile(file);
            }              
          } else {
            this.addFileToErrorArray(file, `File too big (Max allowed size: ${this.humanFileSize(this.maxFileSize)})`);
          }
        } else {
          this.addFileToErrorArray(file, "File format is not valid");
        }
      })
    }
  }

  numberOfFilesValid (files: File[]): boolean {
    if (!this.allowMultiple && files.length > 1) {
      alert("You can only upload 1 file at a time"); // TODO: use error alert service
      return false;
    }

    if (this.allowMultiple && files.length > this.maxFiles) {
      alert(`You can only upload ${this.maxFiles} files at a time`); // TODO: use error alert service
      return false
    }

    return true;
  }

  typeOfFileValid (type: string): boolean {
    return this.acceptedFormats.includes(type);
  }

  sizeOfFileValid (size: number): boolean {
    return size <= this.maxFileSize;
  }

  isFileAlreadyInArray (fileToBeAdded: File, arrayToFilter: string): boolean {
    let fileAlreadyInArray: boolean = false;

    if (arrayToFilter === 'uploadFiles') {
      Array.from(this.filesReadyForUpload).forEach(file => {
        if (file.name == fileToBeAdded.name) {
          fileAlreadyInArray = true;
        }
      });
  
      return fileAlreadyInArray;
    }
    else {
      Array.from(this.filesWithErrors).forEach(file => {
        if (file.name == fileToBeAdded.name) {
          fileAlreadyInArray = true;
        }
      });
  
      return fileAlreadyInArray;
    }
  }

  addProcessedFile (fileToBeAdded: File) {
    this.filesReadyForUpload.push(fileToBeAdded);
  }

  addFileToErrorArray (file: File, errorMessage: string) {
    if (!this.isFileAlreadyInArray(file, 'errors')) {
      this.filesWithErrors.push(file);

      // TODO: Add error
    }
  }

  generatePreviewUrl (file: File) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(file));
  }

  resetFile () {
    this.file = undefined;
  }

  humanFileSize (byteSize?: any) {
    if (byteSize > 1000000) return Math.round(byteSize / 1048576).toFixed(1) + ' Mb';
    else return Math.round(byteSize / 1024).toFixed(1) + ' Kb';
  }

}
