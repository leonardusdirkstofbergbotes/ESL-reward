
import { StickerGroup } from './../../../../models/sticker-group';
import { Component, OnInit, Input } from '@angular/core';
import { StickerGroupService } from '../../services/sticker-group/sticker-group.service';

@Component({
  selector: 'app-sticker-group',
  templateUrl: './sticker-group.component.html',
  styleUrls: ['./sticker-group.component.scss']
})
export class StickerGroupComponent implements OnInit {

  @Input() stickerGroup!: StickerGroup;
  showActionButtons: boolean = false;

  constructor(private _stickerGroupService: StickerGroupService) {}

  ngOnInit(): void {
  }

  editGroup () {
    this._stickerGroupService.editGroup(this.stickerGroup);
  }

  deleteGroup () {
    // TODO: first show confirmation modal (confirm button will trigger this function)
  }  

}
