import { Component, OnDestroy, DoCheck } from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styles: []
})
export class MessagesComponent implements DoCheck {

  constructor(private todoService: TodoService) { }

  ngDoCheck(): void {
    console.log('destroy');
    this.todoService.isDrawedMessage = true;
  }
}
