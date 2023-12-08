import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Subscriber } from '../models/subscriber.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private backendUrl: string; // Replace with your Spring Boot backend URL

  constructor(private http: HttpClient) {
    this.backendUrl = 'http://localhost:8080/subscribers';
  }

  subscribed(subscriber: Subscriber): Observable<string> {
    return this.http.post<string>(`${this.backendUrl}/subscribe`, subscriber)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 409) {
            // 409 status indicates conflict (email already subscribed)
            return throwError(() =>'Email already subscribed');
          }
          // Handle other errors here
          return throwError(()=>'Subscription failed');
        })
      );
  }
}
