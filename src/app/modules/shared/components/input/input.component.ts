import { SimpleChanges } from '@angular/core';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() tooltipText: string | null = null;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() name!: string;
  @Output() valueChanged = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value => {
      this.valueChanged.emit(value);
    })
  }

}
