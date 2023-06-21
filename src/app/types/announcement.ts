import { User, UserReference } from './user';
type UserId = string;
export interface Announcement {
    tagTo: UserReference[];
    title: string;
    content: string; //HTML Content
    createdAt: string;
    createdBy: UserReference;
    likes: UserId[];
    imageUrl?: string;
    taggedUsers?: User[];
    createdByUser?: User;
    id?: string;
}
