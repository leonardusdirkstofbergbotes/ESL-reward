import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title: string = '';
  @Input() subTitle: string = '';

  open: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openModal () {
    this.open = true;
  }

  closeModal () {
    this.open = false;
  }

}
