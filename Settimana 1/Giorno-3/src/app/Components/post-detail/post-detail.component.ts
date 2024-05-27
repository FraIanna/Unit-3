import { Component } from '@angular/core';

import { iPost } from '../../Models/i-post';
import { PostService } from '../../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent {
  postArray: iPost[] = [];
  random: iPost[] = [];

  currentPost!: iPost;

  constructor(private postSvc: PostService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.postArray = this.postSvc.allPosts;
    this.route.params.subscribe((params: any) => {
      this.currentPost = this.postSvc.getById(params.id);
    });
  }
}
