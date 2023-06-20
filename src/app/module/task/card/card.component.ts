import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/types/task';

@Component({
    selector: 'app-task-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
    @Input() task: Task | undefined;
    @Input() openTaskModal: () => void = () => {};
    constructor(private taskService: TaskService) {}
    ngOnInit(): void {}

    handleSelectTask() {
        this.taskService.select(this.task as Task);
        this.openTaskModal();
    }
}
