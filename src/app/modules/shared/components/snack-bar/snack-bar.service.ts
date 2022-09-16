import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  newAlert = new EventEmitter();

  constructor() { }

  notify (text: string, type: string) {
    this.newAlert.emit({
      type: type,
      text: text
    });
  }
}
