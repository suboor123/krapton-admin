import { Department } from './department';
import { Position } from './position';
import { UserRole } from './role';

export type Gender = 'male' | 'female' | 'other';

export interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  location?: string;
  gender: Gender;
  imageUrl?: string;
  aboutMe?: string;
  experience: number;
  department: Department;
  role: UserRole;
  position: Position;
  skills: string[];
}
