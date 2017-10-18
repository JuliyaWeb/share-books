import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from "../../core/services/auth/auth-firebase.service";
import { User } from "../../core/models/user.model";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public user: User;
  public segment: string = 'info';

  constructor(public navCtrl: NavController,
              public authService: AuthService) {
  }

  ionViewCanEnter() {
    this.user = this.authService.getUser();
  }

}
