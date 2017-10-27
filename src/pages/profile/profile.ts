import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from "../../core/auth/auth.service";
import { User } from "../../core/models/user.model";
import { InfoEditComponent } from '../../components/user-profile/info-edit/info-edit';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public editProfile: boolean = false;
  public user: User;
  public segment: string = 'info';

  @ViewChild(InfoEditComponent) userEditInfo: InfoEditComponent;


  constructor(public navCtrl: NavController,
              public authService: AuthService) {
  }

  ionViewCanEnter() {
    this.user = this.authService.getUser();
  }

  public toggleEditProfile() {
    this.editProfile = !this.editProfile;
  }

  public saveData() {
    this.editProfile = false;
    this.userEditInfo.serializeDataForRequest();
  }

}
