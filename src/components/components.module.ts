import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { FaIconComponent } from './fa-icon/fa-icon';
import { InfoComponent } from './user-profile/info/info';
import { InfoEditComponent } from './user-profile/info-edit/info-edit';
import { ModalComponent } from './modal/modal';
import { ImageUploadComponent } from './image-upload/image-upload';
@NgModule({
	declarations: [
	  FaIconComponent,
    InfoComponent,
    InfoEditComponent,
    ModalComponent,
    ImageUploadComponent],
	imports: [IonicModule],
	exports: [
	  FaIconComponent,
    InfoComponent,
    InfoEditComponent,
    ModalComponent,
    ImageUploadComponent]
})
export class ComponentsModule {}
