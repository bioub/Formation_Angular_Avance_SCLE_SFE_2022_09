import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  public todos = ['Item 1', 'Item 2', 'Item 3'];
  // public todos = (new Array(2000)).fill('Item');

  public handleNewTodo(todo) {
    // Changement muable (modifié l'objet sans toucher à l'objet ou la référence)
    // this.todos.unshift(todo);

    // Changement immuable (créé un nouvel objet donc une nouvelle référence)
    this.todos = [todo, ...this.todos];
  }

}
