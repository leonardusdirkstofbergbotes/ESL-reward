import { Component, OnInit } from '@angular/core';
import { SnackBarService } from './snack-bar.service';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {

  text: string = '';
  type: string = '';
  showSnackBar: boolean = false;

  constructor(private _snackbarService: SnackBarService) {
    this._snackbarService.newAlert.subscribe((alertDetails) => {
      this.text = alertDetails.text;
      this.type = alertDetails.type;

      this.showSnackBar = true;
      setTimeout(() => {
        this.showSnackBar = false;
      }, 5000);
    })
  }

  ngOnInit(): void {
  }

}
