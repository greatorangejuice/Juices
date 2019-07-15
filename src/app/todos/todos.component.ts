import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import { Location } from '@angular/common';

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

  goBack(): void {
    this.location.back();
  }

  constructor(private todoService: TodoService, private location: Location) {
  }

  ngOnInit() {
   setTimeout(() => {
     this.todoService.fetchTasks().subscribe( () => {
       this.loading = false;
     });
   }, 500);
  }

}
