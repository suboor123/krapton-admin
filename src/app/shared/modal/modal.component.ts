import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() heading: string = 'Modal Heading';
    @Input() size: string = 'md';
    @Input() handleClose: () => void = () => {
        console.error('Modal expects a closing function');
    };

    constructor() {}

    ngOnInit(): void {
        document.body.style.overflow = 'hidden';
    }

    ngOnDestroy(): void {
        document.body.style.overflow = 'auto';
    }
}
