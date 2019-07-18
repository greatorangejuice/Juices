import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodosComponent} from './todos.component';

const todosRoutes: Routes = [
  { path: '', component: TodosComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(todosRoutes) ],
})
export class TodosRoutingModule {}
