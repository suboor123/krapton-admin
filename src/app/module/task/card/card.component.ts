import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/types/task';

@Component({
    selector: 'app-task-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
    @Input() task: Task | undefined;
    constructor() {}

    ngOnInit(): void {}
}
