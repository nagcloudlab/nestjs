import { Component, Input } from '@angular/core';
import { TodoItem } from "../todo-item/todo-item";
import { TodosService } from '../todos-service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItem, NgFor],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {

  todos: any[] = [];
  filteredTodos: any[] = [];
  @Input() filter: string = 'ALL';

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todosService.todos$.subscribe(todos => {
      this.todos = todos;
      this.applyFilter();
    });
  }

  ngOnChanges(changes: any) {
    if (changes.filter) {
      this.applyFilter();
    }
  }

  private applyFilter() {
    if (this.filter === 'ALL') {
      this.filteredTodos = this.todos;
    } else if (this.filter === 'ACTIVE') {
      this.filteredTodos = this.todos.filter(todo => !todo.completed);
    } else if (this.filter === 'COMPLETED') {
      this.filteredTodos = this.todos.filter(todo => todo.completed);
    }
  }

  toggleAll() {
    this.todosService.toggleAll();
  }

}
