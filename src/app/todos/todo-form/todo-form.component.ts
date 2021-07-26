import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {

  @Output()
  public onAddTodo = new EventEmitter<string>();
  public todo: string;

  public addTodo() {
    this.onAddTodo.emit(this.todo);
  }
}
