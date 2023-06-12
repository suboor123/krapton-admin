import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/types/task';

@Component({
    selector: 'app-task-panel',
    templateUrl: './task-panel.component.html',
    styleUrls: ['./task-panel.component.css'],
})
export class TaskPanelComponent implements OnInit {
    @Input() heading: string = 'Task List';
    @Input() taskList: Task[] = [];

    constructor() {}

    ngOnInit(): void {}
}
