import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../app.component';
import {LogService} from '../log.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() todos: Todo[] = [];

  title = 'Todos Application'

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.getLog();
  }

}
