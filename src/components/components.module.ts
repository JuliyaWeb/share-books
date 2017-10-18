import { NgModule } from '@angular/core';
import { FaIconComponent } from './fa-icon/fa-icon';
import { ProfileComponent } from './profile/profile';
@NgModule({
	declarations: [FaIconComponent,
    ProfileComponent],
	imports: [],
	exports: [FaIconComponent,
    ProfileComponent]
})
export class ComponentsModule {}
