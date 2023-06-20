import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-task-modal',
    templateUrl: './task-modal.component.html',
    styleUrls: ['./task-modal.component.css'],
})
export class TaskModalComponent implements OnInit {
    @Input() handleClose: (() => void) | undefined;
    constructor() {}

    ngOnInit(): void {}
}
