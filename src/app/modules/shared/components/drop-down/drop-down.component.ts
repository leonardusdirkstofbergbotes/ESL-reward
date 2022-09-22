import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  showDropdown: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  open () {
    this.showDropdown = true;
  }

  close () {
    this.showDropdown = false;
  }

  toggle () {
    this.showDropdown = !this.showDropdown;
  }

}
