import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() tabs: string[] = [];
  @Input() activeTab: number = 0;
  @Input() closeAfterConfirmed: boolean = true;
  @Output() tabChanged = new EventEmitter<number>();
  @Output() confirmButtonClicked = new EventEmitter<any>();

  open: boolean = false;
  lastTab: number = 0;

  ngOnInit(): void {
    if (this.tabs.length > 0) {
      this.lastTab = this.tabs.length;
    }
  }

  openModal () {
    this.open = true;
  }

  closeModal () {
    this.open = false;
    this.resetTabData();
  }

  confirmButtonHandler () {
    this.confirmButtonClicked.emit();
    if (this.closeAfterConfirmed) this.closeModal();
  }

  nextTab () {
    if (this.activeTab < this.tabs.length) {
      this.activeTab += 1;
      this.tabChanged.emit(this.activeTab);
    }
  }

  resetTabData () {
    this.activeTab = 0;
  }

  previousTab () {
    if (this.activeTab != 0) {
      this.activeTab -= 1;
      this.tabChanged.emit(this.activeTab);
    }
  }
}
