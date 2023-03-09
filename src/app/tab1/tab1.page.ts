import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  animations: [
    trigger('rotatedStated', [
      state('default', style({transform: 'rotateY(0)'})),
      state('rotated', style({transform: 'rotateY(-360deg)'})),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in'))
    ])
  ]
})
export class Tab1Page {

  face = 'assets/cara.png';
  crown = 'assets/coroa.png';

  logo = 'assets/logo.png';
  image = this.logo;

  info = 'Clique no botão para jogar!';

  state = 'default';

  constructor() {}

  playCoin() {
    this.image = this.logo;
    this.info = 'Girando...'
    this.state = this.state === 'default' ? 'rotated' : 'default';

    setTimeout(() => {
      if (Math.random() < 0.5) {
        this.image = this.face;
        this.info = 'Cara!';
      }
      else {
        this.image = this.crown;
        this.info = 'Coroa!'
      }
    }, 2000);

    // console.log('Foii');
  }

}
