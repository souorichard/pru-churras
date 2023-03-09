import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  value = 1;

  btn1 = 1;
  btn2 = 3;
  btn3 = 6;
  btn4 = 9;
  btn5 = 12;

  point = 0;
  point2 = 0

  constructor() {}

  btnAdd1() {
    this.value = this.btn1;
  }

  btnAdd2() {
    this.value = this.btn2;
  }

  btnAdd3() {
    this.value = this.btn3;
  }

  btnAdd4() {
    this.value = this.btn4;
  }

  btnAdd5() {
    this.value = this.btn5;
  }

  addValue() {
    this.point += this.value;
  }

  addValue2() {
    this.point2 += this.value;
  }

  removeValue() {
    this.point -= this.value;
  }

  removeValue2() {
    this.point2 -= this.value;
  }

  clean() {
    console.log("foi")
  }

}
