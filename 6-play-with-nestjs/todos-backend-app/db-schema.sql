

create table todos (
    id serial primary key,
    title text not null,
    description text,
    completed boolean not null default false
);

insert into todos (title, description) values
('Buy groceries', 'Milk, Bread, Eggs, Butter'),
('Finish project', 'Complete the backend API for the todo app'),
('Call mom', 'Check in and see how she is doing');