import { Component, Input, OnInit } from '@angular/core';
import { AnnouncementService } from 'src/app/services/announcement.service';
import { Announcement } from 'src/app/types/announcement';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
    @Input() announcement!: Announcement;
    @Input() cardId!: Number;
    @Input() deleteAnnouncement: (id: string | undefined) => void = () => {};
    constructor(private announcementService: AnnouncementService) {}

    ngOnInit(): void {}

    public isUserLiked(likesArray: string[]) {
        const userId = JSON.parse(localStorage.getItem('user')!).uid;
        return this.announcement.likes && this.announcement.likes.includes(userId);
    }

    public onLike(id: string | undefined) {
        let likes = this.announcement.likes ? this.announcement.likes : (this.announcement.likes = []);
        this.announcementService.toogleLikes(id as string, likes);
    }
}
