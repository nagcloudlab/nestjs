import { User } from './user.model';
import { Course } from './course.model';

export interface Enrollment {
  user_id: number;
  course_id: number;
  enrolled_at: string;
  progress: number;
  user?: User;
  course?: Course;
}

export interface CreateEnrollmentPayload {
  user_id: number;
  course_id: number;
}
