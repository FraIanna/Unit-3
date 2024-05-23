import { Page404Component } from './Components/page404/page404.component';
import { InactivePostsComponent } from './Components/inactive-posts/inactive-posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ActivePostsComponent } from './Components/active-posts/active-posts.component';
import { PostDetailComponent } from './Components/post-detail/post-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'active-posts',
    component: ActivePostsComponent,
    title: 'Active Posts',
  },
  {
    path: 'inactive-posts',
    component: InactivePostsComponent,
    title: 'Inactive Posts',
  },
  {
    path: 'post/:id',
    component: PostDetailComponent,
  },
  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
