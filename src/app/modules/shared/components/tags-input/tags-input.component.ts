import { InputComponent } from './../input/input.component';
import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.scss']
})
export class TagsInputComponent extends InputComponent {

  @Input() tags: string[] = [];
  
  processTextChange (value: any) {
    if (value.key === 'Enter' && this.control.value !== '') {
      if (!this.tags.includes(this.control.value)) {
        this.tags.push(this.control.value);
        this.control.setValue('');
      }
      else {
        // raise error;
      }
    }
  }

  removeTag (tagName: string) {
    this.tags = this.tags.filter(tag => {
      return tag !== tagName;
    });
  }

}
