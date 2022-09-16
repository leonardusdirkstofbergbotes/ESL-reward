import { SnackBarService } from './../../shared/components/snack-bar/snack-bar.service';
import { StickerGroup } from './../../../models/sticker-group';
import { ModalComponent } from './../../shared/components/modal/modal.component';
import { StickerGroupService } from './../../shared/services/sticker-group/sticker-group.service';
import { MOCK_IMAGES } from './mock-images';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-my-sticker-groups',
  templateUrl: './my-sticker-groups.component.html',
  styleUrls: ['./my-sticker-groups.component.scss']
})
export class MyStickerGroupsComponent {

  @ViewChild('groupCRUDModal') groupForm!: ModalComponent;
  formTabs: string[] = ["Select stickers", 'Group Details'];
  currentTab: number = 1;
  groups: any[] = MOCK_IMAGES;

  groupFormData = this.formBuilder.group({
    name: new FormControl(''),
    public: new FormControl(false)
  });

  tags: string[] = [];
  images: string[] = [];

  constructor (
    private _stickerGroupService: StickerGroupService,
    private _snackbarService: SnackBarService,
    public formBuilder: FormBuilder
  ) {
    this._stickerGroupService.edit.subscribe((stickerGroup: StickerGroup) => {
      for (const [key, value] of Object.entries(stickerGroup)) {
        if (key === 'tags') this.tags = value;
        else if (key === 'images') this.images = value;
        else this.groupFormData.get(key)?.setValue(value);
      }

      this.groupForm.openModal();
      this._snackbarService.notify('testing', 'success');
    })
  }
}
