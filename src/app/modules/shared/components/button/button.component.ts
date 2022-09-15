import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() isLoading: boolean = false;
  @Input() disabled: boolean = false
  @Input() type: string = 'primary';
}
