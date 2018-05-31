import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProfilePage} from '../profile/profile';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {
  items;

  public username: string;
  public password: string;
  public phone: number;
  public email: string;
  public country: string;
  public gender: string;

  constructor(public navCtrl: NavController) {
  }

  navigateToProfile() {
    this.navCtrl.push(ProfilePage, {
      username: this.username,
      phone: this.phone,
      email: this.email,
      country: this.country,
      gender: this.gender,
    })
    };
    
  

    }