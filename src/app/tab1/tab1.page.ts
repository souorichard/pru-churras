import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  face = 'assets/cara.png';
  crown = 'assets/coroa.png';

  logo = 'assets/logo.png';
  image = this.logo;

  info = 'Clique no botão para jogar!';

  constructor() {}

  playCoin() {
    if (Math.random() < 0.5) {
      this.image = this.face;
      this.info = 'Cara!';
    }
    else {
      this.image = this.crown;
      this.info = 'Coroa!'
    }

    // console.log('Foii');
  }

}
