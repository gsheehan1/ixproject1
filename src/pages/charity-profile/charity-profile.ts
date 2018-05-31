import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrowsePage } from '../browse/browse';
import { Charity } from '../../models/charity';

@Component({
  selector: 'page-charity-profile',
  templateUrl: 'charity-profile.html',
})
export class CharityProfilePage { 

  public charity: Charity;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.charity = this.navParams.get("charity");
  }

  navigateToBrowsePage (){
    this.navCtrl.push(BrowsePage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityProfilePage');
  }

}
