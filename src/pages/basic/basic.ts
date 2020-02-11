import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BasicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-basic',
  templateUrl: 'basic.html',
})
export class BasicPage {
  abc:string
  yepMe: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.abc="I'm Don";
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasicPage')
    console.log(this.yepMe+" my result");
    
    
  }
  yepMefunc(event){
    console.log(event +" my result");
  }
 
}
