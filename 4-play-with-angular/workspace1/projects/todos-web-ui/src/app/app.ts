import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosBox } from "./todos-box/todos-box";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todos-web-ui');
}
