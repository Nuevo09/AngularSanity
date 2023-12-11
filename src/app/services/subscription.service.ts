import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Subscriber } from '../models/subscriber.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private backendUrl: string;

  constructor(private http: HttpClient) {
    this.backendUrl = 'http://localhost:8080/subscribers';
  }

  subscribed(subscriber: Subscriber): Observable<Subscriber> {
    return this.http.post<Subscriber>(`${this.backendUrl}/subscribe`, subscriber)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 409) {
            return throwError(() => 'Email already subscribed');
          }
          if (error.status === 500) {
            return throwError(() => 'Subscriber already exists');
          }
          // Handle other errors here
          return throwError(() => 'Subscription failed');
        })
      );
  }
}
