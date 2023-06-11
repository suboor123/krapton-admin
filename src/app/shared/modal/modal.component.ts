import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
    @Input() heading: string = 'Modal Heading';
    @Input() size: string = 'md';
    @Input() handleClose: () => void = () => {
        console.error('Modal expects a closing function');
    };

    constructor() {}

    ngOnInit(): void {}
}
