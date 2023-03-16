import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

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

  constructor(
    private toastController: ToastController,
    private alertController: AlertController
  ) { }


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

  async addValue() {
    this.point += this.value;
    if (this.point >= 12) {
      this.round += 1;
      this.point = 0;
      this.point2 = 0;

      let team1 = 'Time 1';

      const alert = await this.alertController.create({
        header: team1,
        message: 'Ganhou a Partida!',
        buttons: ['Continuar'],
      });

      await alert.present();
    }

    this.value = 1;
  }

  async addValue2() {
    this.point2 += this.value;
    if (this.point2 >= 12) {
      this.round2 += 1;
      this.point = 0;
      this.point2 = 0;

      let team2 = 'Time 2';

      const alert = await this.alertController.create({
        header: team2,
        message: 'Ganhou a Partida!',
        buttons: ['Continuar'],
      });

      await alert.present();
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
    this.value = 1;
    this.point = 0;
    this.point2 = 0;
    this.round = 0;
    this.round2 = 0;

    const toast = await this.toastController.create({
      message: 'Cleaned',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

}
