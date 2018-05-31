import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BrowsePage} from '../browse/browse'

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams:NavParams) {
    this.username = navParams.get("username");
  }
  navigateToBrowse() {
    this.navCtrl.push(BrowsePage)}
   
    }
  