import { Course } from './course.model';

export interface Enrollment {
  id: number;
  userSub: string;
  courseId: number;
  course: Course;
  enrolledAt: string;
  progress: number;
}
