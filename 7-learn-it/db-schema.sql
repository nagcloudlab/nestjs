-- Learn-it DB Schema

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'instructor', 'admin')),
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    instructor_id INT NOT NULL REFERENCES users(id),
    category VARCHAR(50),
    difficulty VARCHAR(20) CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
    is_published BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE user_courses (
    user_id INT NOT NULL REFERENCES users(id),
    course_id INT NOT NULL REFERENCES courses(id),
    enrolled_at TIMESTAMP NOT NULL DEFAULT NOW(),
    progress INT NOT NULL DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
    PRIMARY KEY (user_id, course_id)
);

-- Sample data

INSERT INTO users (email, password, name, role) VALUES
('alice@example.com', 'hashed_pw_1', 'Alice Johnson', 'instructor'),
('bob@example.com', 'hashed_pw_2', 'Bob Smith', 'student'),
('carol@example.com', 'hashed_pw_3', 'Carol Davis', 'student'),
('dave@example.com', 'hashed_pw_4', 'Dave Wilson', 'instructor'),
('eve@example.com', 'hashed_pw_5', 'Eve Martinez', 'admin');

INSERT INTO courses (title, description, instructor_id, category, difficulty, is_published) VALUES
('NestJS Fundamentals', 'Learn the core concepts of NestJS including modules, controllers, and providers.', 1, 'backend', 'beginner', TRUE),
('Advanced TypeScript', 'Deep dive into generics, decorators, and advanced type patterns.', 1, 'language', 'advanced', TRUE),
('PostgreSQL Masterclass', 'From schema design to query optimization and indexing strategies.', 4, 'database', 'intermediate', TRUE),
('REST API Design', 'Best practices for designing clean, maintainable REST APIs.', 4, 'backend', 'beginner', FALSE);

INSERT INTO user_courses (user_id, course_id, progress) VALUES
(2, 1, 65),
(2, 3, 30),
(3, 1, 100),
(3, 2, 45),
(3, 3, 10);
