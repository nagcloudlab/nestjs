import { Component, Input } from '@angular/core';
import { TodosService } from '../todos-service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [
    NgIf
  ],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {

  @Input() todo: any;

  isEditing = false;

  constructor(private todosService: TodosService) { }

  toggleComplete() {
    this.todosService.toggleComplete(this.todo.id);
  }

  deleteTodo() {
    this.todosService.deleteTodo(this.todo.id);
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      let newTitle = (event.target as HTMLInputElement).value;
      this.todosService.updateTitle(this.todo.id, newTitle);
      this.toggleEdit();
    }
    if (event.key === 'Escape') {
      this.toggleEdit();
    }
  }

}
