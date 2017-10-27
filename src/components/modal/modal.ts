import { Component } from '@angular/core';

/**
 * Generated class for the ModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal',
  templateUrl: 'modal.html'
})
export class ModalComponent {

  text: string;

  constructor() {
    console.log('Hello ModalComponent Component');
    this.text = 'Hello World';
  }

}
