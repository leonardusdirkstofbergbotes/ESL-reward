import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-tabs',
  templateUrl: './modal-tabs.component.html',
  styleUrls: ['./modal-tabs.component.scss']
})
export class ModalTabsComponent implements OnInit {

  @Input() tabs: string[] = [];
  @Input() activeTab: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
