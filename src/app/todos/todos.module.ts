import {NgModule} from '@angular/core';
import {TodosComponent} from './todos.component';
import {TodoService} from '../todo.service';
import {MessagesComponent} from '../messages/messages.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {TodosRoutingModule} from './todos-routing.module';

@NgModule({
  declarations: [TodosComponent, MessagesComponent],
  imports: [SharedModule, CommonModule, TodosRoutingModule],
  providers: [TodoService],
})
export class TodosModule {
}
