import { Component } from '@angular/core';
import { iPost } from '../../Models/i-post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss',
})
export class InactivePostsComponent {
  postArray: iPost[] = [];
  random: iPost[] = [];

  currentPost!: iPost;

  constructor(private postSvc: PostService) {}

  ngOnInit() {
    this.postArray = this.postSvc.allPosts;
  }

  getInactivePosts(): iPost[] {
    return this.postArray.filter((post) => !post.active);
  }
}
