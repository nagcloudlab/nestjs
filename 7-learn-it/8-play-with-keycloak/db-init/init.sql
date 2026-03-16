-- Create keycloak database for Keycloak internal use
CREATE DATABASE keycloak;

-- Create learnit database for the application
CREATE DATABASE learnit;

\connect learnit;

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  difficulty VARCHAR(50) CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
  is_published BOOLEAN DEFAULT true,
  created_by VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE enrollments (
  id SERIAL PRIMARY KEY,
  user_sub VARCHAR(255) NOT NULL,
  course_id INT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  progress INT DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  UNIQUE (user_sub, course_id)
);

-- Seed sample courses
INSERT INTO courses (title, description, category, difficulty, is_published, created_by) VALUES
  ('Introduction to TypeScript', 'Learn the basics of TypeScript including types, interfaces, and generics.', 'Programming', 'beginner', true, 'admin'),
  ('NestJS Fundamentals', 'Build scalable server-side applications with NestJS framework.', 'Backend', 'intermediate', true, 'admin'),
  ('Angular Deep Dive', 'Master Angular with signals, standalone components, and advanced patterns.', 'Frontend', 'advanced', true, 'admin');
