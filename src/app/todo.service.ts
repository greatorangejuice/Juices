import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
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
  isDrawedMessage = true;

  constructor(private http: HttpClient) {}

  fetchTasks(): Observable<any> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos/', {
      params: new HttpParams().set('_limit', '15'),
    })
      .pipe(tap((tasks) => {this.tasks = tasks; }));

    // const req = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/todos/', {
    //   headers: new HttpHeaders().append('AUTH_TEST', 'AUTH TEST KEY'),
    //   params: new HttpParams().set('_limit', '10'),
    //   reportProgress: true,
    // });
    //
    // return this.http.request(req);
  }

  onToggle(id: number): void {
    const idx = this.tasks.findIndex( task => task.id === id );
    this.tasks[idx].completed = !this.tasks[idx].completed;
  }

  removeTask(id: number): void {
    const idx = this.tasks.findIndex( task => task.id === id );
    this.messages.push(this.tasks[idx].title);
    this.tasks = this.tasks.filter(task => task.id !== id );
  }
  // Пофиксить таймауты. Наверно лучше повесить удаление на li, а не на весь контейнер.
  hideMessage(): void {
    setTimeout( () => {
      this.isDrawedMessage = false;
      this.messages = [];
    }, 3000 );
  }

}
