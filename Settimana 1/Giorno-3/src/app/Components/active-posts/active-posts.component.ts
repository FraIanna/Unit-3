import { Component } from '@angular/core';
import { iPost } from '../../Models/i-post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss',
})
export class ActivePostsComponent {
  postArray: iPost[] = [];
  random: iPost[] = [];

  currentPost!: iPost;

  constructor(private postSvc: PostService) {}

  async ngOnInit() {
    await this.postSvc.getPosts();
    this.postArray = this.postSvc.getall();
  }

  getActivePosts(): iPost[] {
    return this.postArray.filter((post) => post.active);
  }
}
