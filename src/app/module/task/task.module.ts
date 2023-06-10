import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: BoardComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
class TaskBoardRouteModule {}

@NgModule({
    declarations: [BoardComponent, CardComponent],
    imports: [CommonModule, TaskBoardRouteModule],
})
export class TaskModule {}
