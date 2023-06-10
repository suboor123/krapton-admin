type UserId = string;

export interface Announcement {
    title: string;
    content: string; //HTML Content
    createdAt: string;
    createdBy: UserId;
    likes: UserId[];
    imageUrl?: string;
}
