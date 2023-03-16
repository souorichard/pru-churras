import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  value = 1;
  point = 0;
  point2 = 0;
  round = 0;
  round2 = 0;

  constructor( private toastController: ToastController ) {}


  btnAdd1() {
    this.value = 1;
  }

  btnAdd2() {
    this.value = 3;
  }

  btnAdd3() {
    this.value = 6;
  }

  btnAdd4() {
    this.value = 9;
  }

  btnAdd5() {
    this.value = 12;
  }

  addValue() {
    this.point += this.value;
    if (this.point >= 12) {
      this.round += 1;
      this.point = 0;
      this.point2 = 0;
    }

    this.value = 1;
  }

  addValue2() {
    this.point2 += this.value;
    if (this.point2 >= 12) {
      this.round2 += 1;
      this.point = 0;
      this.point2 = 0;
    }

    this.value = 1;
  }

  removeValue() {
    this.point -= this.value;
    this.point = this.point < 0 ? 0 : this.point;

    this.value = 1;
  }

  removeValue2() {
    this.point2 -= this.value;
    this.point2 = this.point < 0 ? 0 : this.point;

    this.value = 1;
  }

  async cleanToast(position: 'bottom') {
    const toast = await this.toastController.create({
      message: 'Cleaned',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

}
