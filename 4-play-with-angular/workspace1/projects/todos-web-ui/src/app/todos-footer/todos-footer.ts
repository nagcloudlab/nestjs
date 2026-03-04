import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodosService } from '../todos-service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-todos-footer',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './todos-footer.html',
  styleUrl: './todos-footer.css',
})
export class TodosFooter {

  leftCount: number = 0;
  @Input() filter: string = 'ALL';

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.todosService.todos$.subscribe(todos => {
      this.leftCount = todos.filter(todo => !todo.completed).length;
    });
  }

  clearCompleted() {
    this.todosService.clearCompleted();
  }


}
