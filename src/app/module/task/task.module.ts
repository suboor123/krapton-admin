import { SharedModule } from 'src/app/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { BoardHeaderComponent } from './board-header/board-header.component';
import { TaskBoardRouteModule } from './task-board-router.module';
import { TaskFormComponent } from './task-form/task-form.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { TaskPanelComponent } from './task-panel/task-panel.component';
import { TaskModalComponent } from './task-modal/task-modal.component';
import { ModalContentComponent } from './modal-content/modal-content.component';

@NgModule({
    declarations: [
        BoardComponent,
        CardComponent,
        BoardHeaderComponent,
        TaskFormComponent,
        TaskPanelComponent,
        TaskModalComponent,
        ModalContentComponent,
    ],
    imports: [SharedModule, CommonModule, TaskBoardRouteModule, NgMultiSelectDropDownModule.forRoot(), FormsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TaskModule {}
