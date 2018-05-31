import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ProfilePage} from '../profile/profile';
import { CharityProfilePage } from '../charity-profile/charity-profile';
import { Charity } from '../../models/charity';

@Component({
    selector: 'page-browse',
    templateUrl: 'browse.html'
})

export class BrowsePage {

  public charities: Array<Charity> = [];

  constructor(public navCtrl: NavController) {

      // Instantiate a new Charity instance for Rhinos
      var charity1 = new Charity();
      charity1.id = 1;
      charity1.name = "Rhino Poaching";
      charity1.description = "Save the Rhinos!";
  
      // Instantiate a new Charity instance for Dogs
      var charity2 = new Charity();
      charity2.id = 2;
      charity2.name = "Dog Poaching";
      charity2.description = "Save the dawgs!";
  
      // Add our 2 charity instances to our collection of charities
      this.charities.push(charity1);
      this.charities.push(charity2);
  }

      ionViewDidLoad() {
        console.log('ionViewDidLoad CharityListPage');
      }
    
      navigateToCharity(charity: Charity) {
        this.navCtrl.push(CharityProfilePage, {
          charity: charity
        });
  }
    navigateToProfile(){
      this.navCtrl.push(ProfilePage)}

    navigateToCharityProfilePage(){
      this.navCtrl.push(CharityProfilePage)
    }
       
 
}


  
   