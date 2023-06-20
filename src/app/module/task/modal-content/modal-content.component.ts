import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/types/task';

@Component({
    selector: 'app-modal-content',
    templateUrl: './modal-content.component.html',
    styleUrls: ['./modal-content.component.css'],
})
export class ModalContentComponent implements OnInit {
    @Input() selectedTask!: Task | undefined;
    public isEditable: boolean = false;
    public taskDescription: string = '';

    constructor() {}

    ngOnInit(): void {
        this.taskDescription = this.selectedTask?.description || '';
    }

    public onContentClick() {
        this.isEditable = true;
        document.getElementById('modal-cont')?.focus();
    }

    public handleSave() {
        this.isEditable = false;
    }
}
