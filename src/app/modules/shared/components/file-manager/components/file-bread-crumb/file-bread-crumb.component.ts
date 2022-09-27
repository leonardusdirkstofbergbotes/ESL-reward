import { Folder } from 'src/app/models/folder';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-bread-crumb',
  templateUrl: './file-bread-crumb.component.html',
  styleUrls: ['./file-bread-crumb.component.scss']
})
export class FileBreadCrumbComponent implements OnInit {

  @Input() breadCrumbs: Folder[] = [];
  @Output() crumbClicked = new EventEmitter<Folder>();

  constructor() { }

  ngOnInit(): void {
  }

  gotoFolder (folder: Folder) {
    this.crumbClicked.emit(folder);
  }

}
