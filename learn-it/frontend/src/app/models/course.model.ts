import { User } from './user.model';

export interface Course {
  id: number;
  title: string;
  description: string | null;
  instructor_id: number;
  instructor?: User;
  category: string | null;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  is_published: boolean;
  created_at: string;
}

export interface CreateCoursePayload {
  title: string;
  description?: string;
  instructor_id: number;
  category?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  is_published: boolean;
}
