import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SanityService } from 'src/app/services/sanity.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { Subscriber } from 'src/app/models/subscriber.model';
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {


  subscriber:Subscriber;
  constructor(
    private sanityService: SanityService,
    private fb: FormBuilder,
    private subscriptionService:SubscriptionService
  ) {
this.subscriber=new Subscriber();
  }

  posts: any[] = [];
  newsletterForm!: FormGroup;

  defaultImageURL =
    "https://cdn.sanity.io/images//production/f2618421dbd6de2a63ddea363195fbab8f41afc5-3543x2365.jpg";

  imageUrl(source: any) {
    return source ? this.sanityService.urlFor(source) : this.defaultImageURL;
  }

  ngOnInit(): void {
    this.getPosts();
    this.initNewsletterForm();
  }

  initNewsletterForm() {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.newsletterForm.valid) {
      
      
     
      
      this.subscriber.email=this.newsletterForm.value.email;
      this.subscriptionService.subscribed(this.subscriber).subscribe();
      alert('Thank you for subscribing!');
      
      this.newsletterForm.reset();
    }
  }

  async getPosts(): Promise<any[]> {
    this.posts = await this.sanityService.getAllPosts();
    console.log(this.posts);
    return this.posts;
  }
}
