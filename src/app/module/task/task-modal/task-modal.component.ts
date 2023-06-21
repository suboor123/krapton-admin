import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UnsubscribeOnDestroy } from 'src/app/decorators/unsubscribe';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/types/task';

@UnsubscribeOnDestroy()
@Component({
    selector: 'app-task-modal',
    templateUrl: './task-modal.component.html',
    styleUrls: ['./task-modal.component.css'],
})
export class TaskModalComponent implements OnInit {
    @Input() handleClose: (() => void) | undefined;

    private selectedTaskSubs: Subscription | undefined;
    public selectedTask: Task | undefined;

    constructor(private taskService: TaskService) {}

    ngOnInit(): void {
        this.getSelectedTask();
    }

    private getSelectedTask(): void {
        this.selectedTaskSubs = this.taskService.selectedTaskObservable$.subscribe((task) => {
            if (task) {
                this.selectedTask = task;
                console.log(this.selectedTask, ' @@@ selected task');
            }
        });
    }
}
