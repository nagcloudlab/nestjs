import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {

  todos: Array<any> = [];

  todos$ = new BehaviorSubject(this.todos);

  fetchTodos() {
    fetch("http://localhost:8080/api/v1/todos")
      .then(response => response.json())
      .then(data => {
        this.todos = data;
        this.todos$.next(this.todos);
      });
  }

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
