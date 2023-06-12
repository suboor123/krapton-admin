import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MultiSelectComponent } from '../../shared/multi-select/multi-select.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { ProfileRouteModule } from './profile-routing.module';

@NgModule({
    declarations: [
        UserProfileComponent,
        EditProfileComponent,
        MultiSelectComponent,
    ],
    imports: [
        CommonModule,
        NgMultiSelectDropDownModule.forRoot(),
        FormsModule,
        ProfileRouteModule,
    ],
})
export class ProfileModule {}
