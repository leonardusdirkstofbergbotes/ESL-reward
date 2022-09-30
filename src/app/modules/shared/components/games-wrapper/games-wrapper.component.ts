import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-wrapper',
  templateUrl: './games-wrapper.component.html',
  styleUrls: ['./games-wrapper.component.scss']
})
export class GamesWrapperComponent implements OnInit {

  @Input() pageTitle: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
