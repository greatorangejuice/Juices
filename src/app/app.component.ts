import {Component} from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Angular Application';

  public todos: Todo[] = [
    {id: 1, title: 'Купить хлеб', completed: false, date: new Date()},
    {id: 2, title: 'Купить масло', completed: true, date: new Date()},
    {id: 3, title: 'Купить пиво', completed: false, date: new Date()},
  ];
}
