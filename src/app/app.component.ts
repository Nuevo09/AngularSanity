import { Component, OnInit } from '@angular/core';
import { SanityService } from './services/sanity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  constructor(private sanityService: SanityService) { }
  ngOnInit() {
    const post = this.sanityService.getAllPosts();
    console.log(post);
  }
 
  title = 'AngularSanity';
}
