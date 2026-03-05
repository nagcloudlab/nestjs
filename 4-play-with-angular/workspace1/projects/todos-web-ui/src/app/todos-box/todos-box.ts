import { Component } from '@angular/core';
import { TodoInput } from "../todo-input/todo-input";
import { TodoList } from "../todo-list/todo-list";
import { TodosFooter } from "../todos-footer/todos-footer";
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../todos-service';

@Component({
  selector: 'app-todos-box',
  imports: [TodoInput, TodoList, TodosFooter],
  templateUrl: './todos-box.html',
  styleUrl: './todos-box.css',
})
export class TodosBox {

  filter: string = 'ALL';

  constructor(private route: ActivatedRoute, private todosService: TodosService) { }

  ngOnInit() {
    this.todosService.fetchTodos();
    this.route.params.subscribe(params => {
      this.filter = params['filter'] ? params['filter'].toUpperCase() : 'ALL';
    });
  }

}
