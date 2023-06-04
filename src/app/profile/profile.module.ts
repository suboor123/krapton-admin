import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { Routes, RouterModule } from '@angular/router';
import { MultiSelectComponent } from '../shared/multi-select/multi-select.component';

const routes: Routes = [
    {
        path: 'user-profile',
        component: UserProfileComponent,
    },
    {
        path: 'edit-profile',
        component: EditProfileComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
class ProfileRouteModule {}

@NgModule({
    declarations: [
        UserProfileComponent,
        EditProfileComponent,
        MultiSelectComponent,
    ],
    imports: [CommonModule, ProfileRouteModule],
})
export class ProfileModule {}
