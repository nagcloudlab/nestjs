import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {

  todos = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Walk the dog', completed: true },
    { id: 3, title: 'Read a book', completed: false },
  ];

  todos$ = new BehaviorSubject(this.todos);

  addTodo(title: string) {
    const newTodo = {
      id: this.todos.length + 1,
      title,
      completed: false,
    };
    this.todos.push(newTodo);
    this.todos$.next(this.todos);
  }

  toggleComplete(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.todos$.next(this.todos);
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
    this.todos$.next(this.todos);
  }

  toggleAll() {
    const allCompleted = this.todos.every(t => t.completed);
    this.todos.forEach(t => t.completed = !allCompleted);
    this.todos$.next(this.todos);
  }

  updateTitle(id: number, newTitle: string) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.title = newTitle;
      this.todos$.next(this.todos);
    }
  }

  clearCompleted() {
    this.todos = this.todos.filter(t => !t.completed);
    this.todos$.next(this.todos);
  }

}
