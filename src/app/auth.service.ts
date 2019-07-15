import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  isLogin = false;

  isAuth() {
    return new Promise( (resolve) => {
      setTimeout(() => {
          resolve(this.isLogin);
      }, 1000);
    });
  }

  logIn(): void {
    this.isLogin = true;
  }

  logOut(): void {
    this.isLogin = false;
  }
}
