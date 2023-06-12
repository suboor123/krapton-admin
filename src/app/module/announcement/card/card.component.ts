import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from 'src/app/types/announcement';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
    @Input() announcement!: Announcement;
    @Input() cardId!: Number;
    constructor() {}

    ngOnInit(): void {
        console.log(this.cardId);
    }
}
