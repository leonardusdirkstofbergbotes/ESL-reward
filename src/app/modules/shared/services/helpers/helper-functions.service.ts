import { DomSanitizer } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperFunctionsService {

  constructor(
    public domSanitizer: DomSanitizer
  ) { }

  humanFileSize (byteSize?: any) {
    if (byteSize > 1000000) return (byteSize / 1048576).toFixed(1) + ' Mb';
    else return (byteSize / 1024).toFixed(1) + ' Kb';
  }

  generatePreviewUrl (file: File) {
    console.log('generate now');
    return this.domSanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(file));
  }
}
