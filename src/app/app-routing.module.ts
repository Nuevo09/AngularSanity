import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from "./views/post/post.component";
import {BlogComponent} from "./views/blog/blog.component";

const routes: Routes = [{
  path: '',
  loadComponent: () => import('./views/blog/blog.component').then(m => BlogComponent),
  pathMatch: 'full',
  title: "'TE' blogs"
}, {
  path: 'post/:id',
  loadComponent: () => import('./views/post/post.component').then(m => PostComponent),
  pathMatch: 'full',
  title: "'TE' blogs"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)], exports: [RouterModule]
})
export class AppRoutingModule {
}
