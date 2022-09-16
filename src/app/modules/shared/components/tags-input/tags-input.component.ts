import { InputComponent } from './../input/input.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.scss']
})
export class TagsInputComponent extends InputComponent {

  @Input() tags: string[] = [];

  // TODO: might need to add a output event to send the tags to the parent
  
  processTextChange (value: any) {
    console.log(this.control);
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
