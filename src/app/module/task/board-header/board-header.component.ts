import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-board-header',
    templateUrl: './board-header.component.html',
    styleUrls: ['./board-header.component.css'],
})
export class BoardHeaderComponent implements OnInit {
    public showCreateTaskModal: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    openTaskModal() {
        this.showCreateTaskModal = true;
    }

    closeTaskModal() {
        this.showCreateTaskModal = false;
    }
}
