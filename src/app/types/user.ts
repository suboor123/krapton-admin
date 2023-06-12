import { Department } from './department';
import { Position } from './position';
import { UserRole } from './role';

export type Gender = 'male' | 'female' | 'other';
export type UserReference = {
    userId: string;
    userName: string;
    imageUrl?: string;
};

export interface User {
    id?: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    location?: string;
    gender: Gender;
    imageUrl?: string;
    aboutMe?: string;
    experience: string;
    department: Department;
    role: UserRole;
    position: Position;
    skills: string[];
    githubUrl?: string;
    linkedInUrl?: string;
}
