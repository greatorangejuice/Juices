import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public tasks: Todo[] = [];
  messages = [];

  constructor(private http: HttpClient) {}

  fetchTasks(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos/?_limit=15')
      .pipe(tap((tasks) => {this.tasks = tasks; }));
  }


  onToggle(id: number) {
    const idx = this.tasks.findIndex( task => task.id === id );
    this.tasks[idx].completed = !this.tasks[idx].completed;
  }

  removeTask(id: number): void {
    const idx = this.tasks.findIndex( task => task.id === id );
    this.messages.push(this.tasks[idx].title);
    this.tasks = this.tasks.filter(task => task.id !== id );
  }
}
