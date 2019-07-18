import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodosComponent} from './todos.component';

const todosRoutes: Routes = [
  { path: 'todos', component: TodosComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(todosRoutes) ],
})
export class TodosRoutingModule {}
