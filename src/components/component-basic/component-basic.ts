import { Component,Input,Output,EventEmitter } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

/**
 * Generated class for the ComponentBasicComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'component-basic',
  templateUrl: 'component-basic.html'
})

export class ComponentBasicComponent {

  text: string;
  @Input() user:string;
  @Output() textMe: EventEmitter<any>;
  constructor(private navCtrl:NavController) {
    console.log('Hello ComponentBasicComponent Component');
    this.textMe = new EventEmitter<any>();
    this.text="I m IornMan.";
    let interval= setInterval(()=>{
      this.textMe.emit(this.text);

    },3000);
   
  }

}
