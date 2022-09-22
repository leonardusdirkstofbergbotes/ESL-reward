import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-bread-crumb',
  templateUrl: './file-bread-crumb.component.html',
  styleUrls: ['./file-bread-crumb.component.scss']
})
export class FileBreadCrumbComponent implements OnInit {

  @Input() breadCrumbs: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
