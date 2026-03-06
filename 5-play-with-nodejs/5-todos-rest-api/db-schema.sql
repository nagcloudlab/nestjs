

create database todosdb;
use todosdb;

create table todos (
  id int auto_increment primary key,
  title varchar(255) not null,
  description text,
  completed boolean default false
);

insert into todos (title, description) values
('Buy groceries', 'Milk, Bread, Eggs, Butter'),
('Finish project', 'Complete the coding task by Friday'),
('Call mom', 'Check in and see how she is doing');

select * from todos;