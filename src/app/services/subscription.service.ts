import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscriber } from '../models/subscriber.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private backendUrl: string; // Replace with your Spring Boot backend URL

  constructor(private http: HttpClient) {
this.backendUrl= 'http://localhost:8080/subscribers';
   }

 public subscribed(subscriber:Subscriber) {
    return this.http.post<Subscriber>(`${this.backendUrl}/subscribe`,  subscriber );
  }

//   : Observable<string>
}
