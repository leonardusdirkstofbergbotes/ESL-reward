import { StickerGroup } from './../../../../models/sticker-group';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StickerGroupService {

  edit = new Subject<StickerGroup>();

  constructor() { }

  editGroup (stickerGroup: StickerGroup) {
    this.edit.next(stickerGroup);
  }
}
