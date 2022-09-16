import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MenuItemComponent } from './components/side-nav/menu-item/menu-item.component';
import { AdminPageWrapperComponent } from './components/admin-page-wrapper/admin-page-wrapper.component';
import { SubMenuItemComponent } from './components/side-nav/sub-menu-item/sub-menu-item.component';
import { PillComponent } from './components/pill/pill.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { StickerNavigatorComponent } from './components/sticker-navigator/sticker-navigator.component';
import { FolderComponent } from './components/sticker-navigator/components/folder/folder.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalTabsComponent } from './components/modal/components/modal-tabs/modal-tabs.component';
import { InputComponent } from './components/input/input.component';
import { ToolTipComponent } from './components/input/components/tool-tip/tool-tip.component';
import { TagsInputComponent } from './components/tags-input/tags-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StickerGroupComponent } from './components/sticker-group/sticker-group.component';

@NgModule({
  declarations: [
    SideNavComponent,
    MenuItemComponent,
    AdminPageWrapperComponent,
    SubMenuItemComponent,
    PillComponent,
    SearchBarComponent,
    ButtonComponent,
    StickerNavigatorComponent,
    FolderComponent,
    ModalComponent,
    ModalTabsComponent,
    InputComponent,
    ToolTipComponent,
    TagsInputComponent,
    StickerGroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SideNavComponent,
    AdminPageWrapperComponent,
    PillComponent,
    SearchBarComponent,
    ButtonComponent,
    StickerNavigatorComponent,
    ModalComponent,
    InputComponent,
    TagsInputComponent,
    StickerGroupComponent
  ]
})
export class SharedModule { }
