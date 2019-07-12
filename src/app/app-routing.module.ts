import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {TdFormComponent} from './td-form/td-form.component';
import {TodosComponent} from './todos/todos.component';

const routes: Routes = [
  { path: '', redirectTo: '/reactive', pathMatch: 'full' },
  { path: 'reactive', component: ReactiveFormComponent },
  { path: 'td', component: TdFormComponent },
  { path: 'todos', component: TodosComponent },
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule {}
