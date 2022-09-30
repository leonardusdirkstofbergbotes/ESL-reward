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
import { ModalComponent } from './components/modal/modal.component';
import { ModalTabsComponent } from './components/modal/components/modal-tabs/modal-tabs.component';
import { InputComponent } from './components/input/input.component';
import { ToolTipComponent } from './components/input/components/tool-tip/tool-tip.component';
import { TagsInputComponent } from './components/tags-input/tags-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StickerGroupComponent } from './components/sticker-group/sticker-group.component';
import { FileDropPoolComponent } from './components/file-drop-pool/file-drop-pool.component';
import { FileManagerComponent } from './components/file-manager/file-manager.component';
import { FileBreadCrumbComponent } from './components/file-manager/components/file-bread-crumb/file-bread-crumb.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { GamesWrapperComponent } from './components/games-wrapper/games-wrapper.component';

@NgModule({
  declarations: [
    SideNavComponent,
    MenuItemComponent,
    AdminPageWrapperComponent,
    SubMenuItemComponent,
    PillComponent,
    SearchBarComponent,
    ButtonComponent,
    ModalComponent,
    ModalTabsComponent,
    InputComponent,
    ToolTipComponent,
    TagsInputComponent,
    StickerGroupComponent,
    FileDropPoolComponent,
    FileManagerComponent,
    FileBreadCrumbComponent,
    DropDownComponent,
    GamesWrapperComponent
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
    ModalComponent,
    InputComponent,
    TagsInputComponent,
    StickerGroupComponent,
    FileDropPoolComponent,
    FileManagerComponent,
    DropDownComponent,
    GamesWrapperComponent
  ]
})
export class SharedModule { }
