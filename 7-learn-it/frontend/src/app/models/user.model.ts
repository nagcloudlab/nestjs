export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: 'student' | 'instructor' | 'admin';
  created_at: string;
}

export interface CreateUserPayload {
  email: string;
  password: string;
  name: string;
  role: 'student' | 'instructor' | 'admin';
}
