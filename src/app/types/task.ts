import { User } from './user';

type UserId = 'string';

export enum TaskStatus {
    OPENED = 'OPENED',
    IN_PROGESS = 'IN_PROGRESS',
    IN_REVIEW = 'IN_REVIEW',
    COMPLETED = 'COMPLETED',
}

export interface Task {
    id?: UserId;
    title: string;
    description: string;
    createdAt: string;
    createdBy: UserId;
    assignedTo: UserId;
    status: TaskStatus;
    startDate: string;
    expectedEndDate: string;
    pullRequestUrl: string;
    isArchived: boolean;
    assignedUser?: User;
    createdByUser?: User;
}
