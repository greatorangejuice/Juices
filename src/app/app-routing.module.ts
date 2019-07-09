import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {TdFormComponent} from './td-form/td-form.component';

const routes: Routes = [
  { path: 'reactive', component: ReactiveFormComponent },
  { path: 'td', component: TdFormComponent },
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule {}
