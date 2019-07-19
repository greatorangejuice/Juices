import {ChangeDetectorRef, Component} from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Angular Application';
  answer = 'no';
  constructor(private auth: AuthService, cd: ChangeDetectorRef) {
    setTimeout( () => {
      // cd.detach();
      this.answer = 'yes';
    }, 3000 );
  }

  changeAuthStatus(status: string): void {
    if (status === 'login') {
      this.auth.logIn();
    } else {
      this.auth.logOut();
    }
  }
}
