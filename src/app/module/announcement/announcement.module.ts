import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { AnnouncementFormComponent } from './announcement-form/announcement-form.component';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: PanelComponent,
    },
];

@NgModule({
    declarations: [PanelComponent, CardComponent, AnnouncementFormComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        NgMultiSelectDropDownModule.forRoot(),
        FormsModule,
    ],
    exports: [RouterModule],
})
export class AnnouncementModule {}
