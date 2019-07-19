import {Component} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Angular Application';
  constructor(private auth: AuthService) {}

  changeAuthStatus(status: string): void {
    if (status === 'login') {
      this.auth.logIn();
    } else {
      this.auth.logOut();
    }
  }
}
