import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AppRoutingModule } from './app-routing.module';
import { TdFormComponent } from './td-form/td-form.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import {VideosComponent} from './videos/videos.component';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';
import {TodosModule} from './todos/todos.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TdFormComponent,
    VideosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TodosModule,
    SharedModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
    AuthService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
