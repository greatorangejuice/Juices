import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  title = 'Todos Application';
  private loading = true;

  onChange(id: number): void {
    this.todoService.onToggle(id);
  }

  removeTask(id: number): void {
    this.todoService.removeTask(id);
    this.todoService.hideMessage();
  }

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
   setTimeout(() => {
     this.todoService.fetchTasks().subscribe( () => {
       this.loading = false;
     });
   }, 1000);
  }

}
