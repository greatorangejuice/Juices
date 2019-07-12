import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const clonedRequest = req.clone({
      headers: req.headers.set('AUTH_TOKEN', 'waefwewdf1123c21c12ecd213e@fd23ce1'),
      params: req.params.set('_limit', '20'),
    });

    return next.handle(clonedRequest);

  }
}
