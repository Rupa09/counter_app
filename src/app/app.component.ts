import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'counterapp';
  //countNumber
  countNumber = 0;

  //reset
  resetBtn() {
    this.countNumber = 0;
  }
  //increaseBtn
  increaseBtn() {
    this.countNumber = this.countNumber + 1;
  }
  //decreaseBtn
  decreaseBtn() {
    this.countNumber = this.countNumber - 1;
    if (this.countNumber > 0) {
      this.countNumber = 0;
    }
  }
}
