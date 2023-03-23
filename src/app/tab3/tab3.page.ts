import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  dadoStatic = 'assets/dado-parado.png';
  dadoGif = 'assets/dado-mechendo.gif';

  public input: number | undefined;

  value = 0;

  constructor() {}

  playDado() {}

}
