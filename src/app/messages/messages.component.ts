import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styles: []
})
export class MessagesComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
}
