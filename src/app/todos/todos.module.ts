import {NgModule} from '@angular/core';
import {TodosComponent} from './todos.component';
import {TodoService} from '../todo.service';
import {BrowserModule} from '@angular/platform-browser';
import {MessagesComponent} from '../messages/messages.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {TodosRoutingModule} from './todos-routing.module';

@NgModule({
  declarations: [TodosComponent, MessagesComponent],
  imports: [BrowserModule, SharedModule, CommonModule, TodosRoutingModule],
  providers: [TodoService],
})
export class TodosModule {
}
