import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="#">Why do I have this issue?</a>',
          });
          this.router.navigateByUrl('/home');
        } else if (error.status === 404) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Page Not Found!',
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        } else {
          console.error('HTTP error', error.message);
        }
        return throwError(() => new Error('Errore'));
      })
    );
  }
}
