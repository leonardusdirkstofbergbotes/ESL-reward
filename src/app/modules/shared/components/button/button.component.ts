import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() isLoading: boolean = false;
  @Input() disabled: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
