import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProfilePage} from '../profile/profile';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public username: string;
  public password: string;

  constructor(public navCtrl: NavController) {
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  navigateToProfile() {
    this.navCtrl.push(ProfilePage, {
      username: this.username
    });

  }

}