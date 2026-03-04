import { Component } from '@angular/core';
import { TodosService } from '../todos-service';

@Component({
  selector: 'app-todo-input',
  imports: [],
  templateUrl: './todo-input.html',
  styleUrl: './todo-input.css',
})
export class TodoInput {

  constructor(private todosService: TodosService) { }

  handleKeyup(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const input = event.target as HTMLInputElement;
      const value = input.value.trim();
      if (value) {
        this.todosService.addTodo(value);
        input.value = '';
      }
    }
  }

}
