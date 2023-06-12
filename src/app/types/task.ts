import { User, UserReference } from './user';

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
    createdBy: UserReference;
    status: TaskStatus;
    startDate: string;
    expectedEndDate: string;
    pullRequestUrl: string;
    isArchived: boolean;
    assignedTo?: UserReference;
    createdByUser?: User;
    assignedUser?: User;
}
