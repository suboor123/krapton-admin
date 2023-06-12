import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UnsubscribeOnDestroy } from 'src/app/decorators/unsubscribe';
import { Alert } from 'src/app/lib/alert';
import { TaskService } from 'src/app/services/task.service';
import { Task, TaskStatus } from 'src/app/types/task';

interface TaskMap {
    [TaskStatus.OPENED]: Task[];
    [TaskStatus.IN_PROGESS]: Task[];
    [TaskStatus.IN_REVIEW]: Task[];
    [TaskStatus.COMPLETED]: Task[];
}

@UnsubscribeOnDestroy()
@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
    public tasksMap: TaskMap = {
        [TaskStatus.OPENED]: [],
        [TaskStatus.IN_PROGESS]: [],
        [TaskStatus.IN_REVIEW]: [],
        [TaskStatus.COMPLETED]: [],
    };

    public taskSubscription: Subscription | undefined;
    constructor(private taskService: TaskService) {}

    private resetTaskMap() {
        this.tasksMap = {
            [TaskStatus.OPENED]: [],
            [TaskStatus.IN_PROGESS]: [],
            [TaskStatus.IN_REVIEW]: [],
            [TaskStatus.COMPLETED]: [],
        };
    }

    ngOnInit(): void {
        this.taskService.refreshAllTasks();
        this.taskSubscription = this.taskService.taskObservable$.subscribe((tasks) => {
            this.resetTaskMap();
            tasks.forEach((task) => {
                this.tasksMap[task.status].push(task);
            });
        });
    }
}
